"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NoSearchResult(_ref) {
  var query = _ref.query;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "container"
  }, _react.default.createElement("div", {
    className: "row no-search-result"
  }, _react.default.createElement("div", {
    className: "col-sm-12 col-md-6 mx-auto"
  }, _react.default.createElement("div", {
    className: "mb-6"
  }, _react.default.createElement("h1", null, query), _react.default.createElement("p", {
    className: "lead"
  }, "Vi fant ingen produkter! Vil du lage en Tipio?")), _react.default.createElement("a", {
    className: "circle-cta",
    href: ""
  }, _react.default.createElement("img", {
    alt: ""
  }), _react.default.createElement("span", {
    className: "d-block"
  }, "Lag Tipio"))))));
}

var _default = NoSearchResult;
exports.default = _default;