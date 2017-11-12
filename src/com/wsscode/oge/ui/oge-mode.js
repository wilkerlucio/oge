// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

/**
 * Author: Wilker Lucio
 * Branched from CodeMirror's Clojure mode (by Hans Engel, based on implementation by Koh Zi Han)
 */

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  CodeMirror.defineMode("oge", function (options) {
    var BUILTIN = "builtin", COMMENT = "comment", STRING = "string", CHARACTER = "string-2",
      ATOM = "atom", ATOM_IDENT = "atom-ident", ATOM_COMP = "atom-composed", NUMBER = "number", BRACKET = "bracket", KEYWORD = "keyword", VAR = "variable";
    var INDENT_WORD_SKIP = options.indentUnit || 2;
    var NORMAL_INDENT_UNIT = options.indentUnit || 2;

    var tests = {
      digit: /\d/,
      digit_or_colon: /[\d:]/,
      hex: /[0-9a-f]/i,
      sign: /[+-]/,
      exponent: /e/i,
      keyword_char: /[^\s\(\[\;\)\]]/,
      symbol: /[\w*+!\-\._?:<>\/\xa1-\uffff]/,
      block_indent: /^(?:def|with)[^\/]+$|\/(?:def|with)/
    };

    function pushStack(state, stack) {
      stack.prev = state.pathStack;
      state.pathStack = stack;
      state.mode = stack.mode;
    }

    function popStack(state) {
      state.pathStack = state.pathStack.prev;
      state.mode = state.pathStack.mode;
    }

    function isNumber(ch, stream){
      // hex
      if ( ch === '0' && stream.eat(/x/i) ) {
        stream.eatWhile(tests.hex);
        return true;
      }

      // leading sign
      if ( ( ch == '+' || ch == '-' ) && ( tests.digit.test(stream.peek()) ) ) {
        stream.eat(tests.sign);
        ch = stream.next();
      }

      if ( tests.digit.test(ch) ) {
        stream.eat(ch);
        stream.eatWhile(tests.digit);

        if ( '.' == stream.peek() ) {
          stream.eat('.');
          stream.eatWhile(tests.digit);
        } else if ('/' == stream.peek() ) {
          stream.eat('/');
          stream.eatWhile(tests.digit);
        }

        if ( stream.eat(tests.exponent) ) {
          stream.eat(tests.sign);
          stream.eatWhile(tests.digit);
        }

        return true;
      }

      return false;
    }

    // Eat character that starts after backslash \
    function eatCharacter(stream) {
      var first = stream.next();
      // Read special literals: backspace, newline, space, return.
      // Just read all lowercase letters.
      if (first && first.match(/[a-z]/) && stream.match(/[a-z]+/, true)) {
        return;
      }
      // Read unicode character: \u1000 \uA0a1
      if (first === "u") {
        stream.match(/[0-9a-z]{4}/i, true);
      }
    }

    function readSymbol(stream) {
      stream.eatWhile(tests.symbol);

      return ATOM;
    }

    function nextIndent(stream) {
      return stream.column() + stream.current().length;
    }

    function makeToken(stream, state) {
      const string = stream.current();
      const start = stream.column();
      const end = start + string.length;

      return {state: state, string: string, type: "atom", start: start, end: end};
    }

    const ogeCm = com.wsscode.oge.ui.codemirror;

    function atomOrComp(stream, state) {
      if (!options.ogeIndex) return ATOM;

      const token = makeToken(stream, state);
      const words = ogeCm.completions(cljsDeref(options.ogeIndex), token, token.string);

      if (ogeCm.key_has_children_QMARK_(words, token)) {
        return ATOM_COMP;
      } else {
        return ATOM;
      }
    }

    return {
      startState: function () {
        return {
          pathStack: {},
          indentation: 0,
          mode: null
        };
      },

      token: function (stream, state) {
        var ch, stack = state.pathStack;

        if (stack == null && stream.sol()) {
          // update indentation, but only if indentStack is empty
          state.indentation = stream.indentation();
        }

        // skip spaces
        if (state.mode != "string" && stream.eatSpace()) {
          return null;
        }

        switch(state.mode) {
          case "string": // multi-line string parsing mode
            var next, escaped = false;
            while ((next = stream.next()) != null) {
              if (next == "\"" && !escaped) {
                popStack(state);
                break;
              }
              escaped = !escaped && next == "\\";
            }

            return STRING;

          case "attr-list":
            ch = stream.next();

            if (ch == ":") {
              readSymbol(stream);

              return atomOrComp(stream, state);
            }

            if (ch == "*") {
              return ATOM;
            }

            if (ch == "[") {
              pushStack(state, {mode: "ident", indent: nextIndent(stream)});

              return BRACKET;
            }

            if (ch == "]") {
              popStack(state);

              return BRACKET;
            }

            if (ch == "{") {
              pushStack(state, {mode: "join", indent: nextIndent(stream)});

              return BRACKET;
            }

            break;

          case "join":
            ch = stream.next();

            if (!stack.key) {
              if (ch == ":") {
                readSymbol(stream);

                stack.key = stream.current();

                return ATOM;
              }

              if (ch == "[") {
                pushStack(state, {mode: "ident", indent: nextIndent(stream)});

                return BRACKET;
              }
            } else {
              if (ch == "[") {
                pushStack(state, {mode: "attr-list", indent: nextIndent(stream)});

                return BRACKET;
              }
            }

            if (ch == "}") {
              popStack(state);

              return BRACKET;
            }

            break;

          case "ident":
            ch = stream.next();

            if (ch == ":") {
              readSymbol(stream);

              if (!stack.key) stack.key = stream.current();

              return ATOM_IDENT;
            }

            if (ch == "\"") {
              pushStack(state, {mode: "string", indent: nextIndent(stream)});

              return STRING;
            }

            if (isNumber(ch,stream)){
              return NUMBER;
            }

            if (ch == "]") {
              popStack(state);

              if (stack.prev.mode == "join") stack.prev.key = stack;

              return BRACKET;
            }

            readSymbol(stream);

            return VAR;

          default: // default parsing mode
            ch = stream.next();

            if (ch == "[") {
              pushStack(state, {mode: "attr-list", indent: nextIndent(stream)});

              return BRACKET;
            }
        }

        stream.eatWhile(tests.symbol);

        return "error";
      },

      indent: function (state) {
        if (state.pathStack == null) return state.indentation;
        return state.pathStack.indent;
      },

      closeBrackets: {pairs: "()[]{}\"\""},
      lineComment: ";"
    };
  });
});
