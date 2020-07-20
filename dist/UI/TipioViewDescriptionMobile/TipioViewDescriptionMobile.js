"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _react = _interopRequireDefault(require("react"));

var _formatText = _interopRequireDefault(require("../../Util/formatText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(_ref) {
  var description = _ref.description;

  if (description) {
    var _FormatText = (0, _formatText.default)(description, function (item, key) {
      return _react.default.createElement("li", {
        key: key + ' ' + item
      }, item);
    }, _react.default.createElement("br", null)),
        textFormatted = _FormatText.textFormatted,
        restFormatted = _FormatText.restFormatted;

    return [textFormatted, restFormatted];
  }

  return null;
} // CHANGE