"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EmptyAvatar(_ref) {
  var children = _ref.children;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("a", {
    className: "emptyAvatar",
    href: "",
    onClick: function onClick(e) {
      e.preventDefault();
    }
  }, _react.default.createElement("svg", {
    className: "emptyAvatar--icon",
    width: 47,
    height: 37
  }, _react.default.createElement("g", {
    fill: "#C9CFD3",
    fillRule: "evenodd"
  }, _react.default.createElement("path", {
    d: "M45.42 31.366l-4.58-4.88a3.68 3.68 0 00-2.705-1.186 3.68 3.68 0 00-2.705 1.186l-3.245 3.458-4.689-5.139c-.71-.777-1.662-1.206-2.682-1.206-1.019 0-1.97.429-2.681 1.206l-5.949 6.519V13.42c0-.432.35-.783.78-.783H44.64c.43 0 .78.351.78.783v17.946zm0 2.985a.782.782 0 01-.779.783H16.963a.782.782 0 01-.779-.784v-.707l7.098-7.779c.412-.45.956-.698 1.532-.698.578 0 1.122.248 1.533.698l6.776 7.426a.777.777 0 001.101.049.785.785 0 00.048-1.107l-1.031-1.13 3.322-3.541c.42-.447.978-.694 1.572-.694.593 0 1.151.247 1.571.694l5.714 6.088v.702zM14.627 16.934V34.35a2.346 2.346 0 002.337 2.35h27.678a2.346 2.346 0 002.338-2.35V13.42a2.346 2.346 0 00-2.339-2.349H16.963a2.346 2.346 0 00-2.337 2.349v3.514z"
  }), _react.default.createElement("path", {
    d: "M39.015 21.383a2.308 2.308 0 01-2.3-2.31 2.307 2.307 0 012.3-2.311c1.268 0 2.3 1.036 2.3 2.311a2.308 2.308 0 01-2.3 2.31m0-6.187c-2.128 0-3.858 1.74-3.858 3.877 0 2.137 1.73 3.877 3.858 3.877 2.129 0 3.859-1.74 3.859-3.877 0-2.138-1.73-3.877-3.859-3.877M14.847 32.108L11.736 33.5a.779.779 0 01-1.03-.396l-.286-.647-.94-2.117-7.254-16.355a.786.786 0 01.395-1.034L27.902 1.634a.78.78 0 011.03.396l4.016 9.448 1.832-.141-4.425-9.944a2.336 2.336 0 00-3.087-1.19L1.986 11.522a2.356 2.356 0 00-1.184 3.102l.79 1.78.634 1.43L9.283 33.74a2.336 2.336 0 003.087 1.19l2.779-1.232-.302-1.591z"
  }))), _react.default.createElement("span", {
    className: "emptyAvatar--text"
  }, "Last opp logo"), _react.default.createElement("svg", {
    className: "emptyAvatar--add",
    width: 32,
    height: 32
  }, _react.default.createElement("defs", null, _react.default.createElement("path", {
    id: "prefix__a",
    d: "M5.35 6.829H.986a.736.736 0 110-1.472H5.35V.992a.736.736 0 111.472 0v4.365h4.372a.736.736 0 110 1.472H6.822V11.2a.736.736 0 11-1.472 0V6.829z"
  })), _react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("circle", {
    cx: 16,
    cy: 16,
    r: 16,
    fill: "#4ABCAC"
  }), _react.default.createElement("g", {
    transform: "translate(9.92 9.92)"
  }, _react.default.createElement("mask", {
    id: "prefix__b",
    fill: "#fff"
  }, _react.default.createElement("use", {
    xlinkHref: "#prefix__a"
  })), _react.default.createElement("use", {
    fill: "#8C8F91",
    fillRule: "nonzero",
    xlinkHref: "#prefix__a"
  }), _react.default.createElement("g", {
    fill: "#381B81",
    mask: "url(#prefix__b)"
  }, _react.default.createElement("path", {
    d: "M-17.92-1.92h32v32h-32z"
  })))))), children);
}

var _default = EmptyAvatar;
exports.default = _default;