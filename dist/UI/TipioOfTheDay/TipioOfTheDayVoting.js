"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TipioOfTheDay = _interopRequireDefault(require("./TipioOfTheDay"));

var _SecondaryButton = _interopRequireDefault(require("../Buttons/SecondaryButton"));

var _SecondaryOutlineButton = _interopRequireDefault(require("../Buttons/SecondaryOutlineButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TipioOfTheDayVoting = function TipioOfTheDayVoting(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return _react.default.createElement(_TipioOfTheDay.default, props, _react.default.createElement("div", {
    className: "tipioOfTheDay__content--submit"
  }, children));
};

var _default = TipioOfTheDayVoting;
exports.default = _default;