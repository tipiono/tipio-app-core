"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function HorizontalTimeline(_ref) {
  _objectDestructuringEmpty(_ref);

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "horizontal-timeline"
  }, _react.default.createElement("ul", {
    className: "horizontal-timeline-bar"
  }, _react.default.createElement("li", {
    className: "horizontal-timeline-item completed step-1"
  }), _react.default.createElement("li", {
    className: "horizontal-timeline-item ongoing step-2"
  }), _react.default.createElement("li", {
    className: "horizontal-timeline-item coming step-3"
  })), _react.default.createElement("div", {
    className: "horizontal-timeline-content"
  }, _react.default.createElement("h4", {
    className: "timeline-item-title"
  }, "P\xE5melding p\xE5g\xE5r"), _react.default.createElement("a", {
    href: "#"
  }, "Sjekk status"))));
}

var _default = HorizontalTimeline;
exports.default = _default;