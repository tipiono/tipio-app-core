"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SecondaryButton = _interopRequireDefault(require("../../UI/Buttons/SecondaryButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShareButton = function ShareButton(_ref) {
  var children = _ref.children;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_SecondaryButton.default, {
    text: "Del na"
  }));
};

var _default = ShareButton;
exports.default = _default;