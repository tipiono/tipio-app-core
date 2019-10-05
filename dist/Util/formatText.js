"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function formatText(input, formatter, separator) {
  var maxLength = 280;
  var text;
  var rest;

  if (input) {
    text = input.substr(0, maxLength);
    text = text.substr(0, Math.min(text.length, text.lastIndexOf(" ")));
    rest = input.substr(text.length);
    /**
     * Format first [maxLength] characters
     */

    text = input.split("\n").map(function (item, key) {
      if (item) {
        return formatter(item, key);
      } else {
        return separator;
      }
    });
    /**
     * Format rest of the text
     */

    if (rest) {
      rest = rest.split("\n").map(function (item, key) {
        if (item) {
          // <li key={key}>{i}</li>
          return formatter(item, key);
        } else {
          return separator;
        }
      });
    }
  }

  return {
    textFormatted: text,
    restFormatted: rest
  };
}

var _default = formatText;
exports.default = _default;