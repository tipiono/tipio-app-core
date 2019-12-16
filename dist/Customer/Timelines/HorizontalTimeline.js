"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function HorizontalTimeline(_ref) {
  var verticalStatusOnClick = _ref.verticalStatusOnClick,
      status = _ref.status;

  if (!status) {
    return null;
  }

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "horizontal-timeline"
  }, _react.default.createElement("ul", {
    className: "horizontal-timeline-bar"
  }, _react.default.createElement("li", {
    className: (0, _classnames.default)("horizontal-timeline-item step-1", _defineProperty({}, status.step1, true))
  }), _react.default.createElement("li", {
    className: (0, _classnames.default)("horizontal-timeline-item step-2", _defineProperty({}, status.step2, true))
  }), _react.default.createElement("li", {
    className: (0, _classnames.default)("horizontal-timeline-item step-3", _defineProperty({}, status.step3, true))
  })), _react.default.createElement("div", {
    className: "horizontal-timeline-content"
  }, _react.default.createElement("h4", {
    className: "timeline-item-title"
  }, "P\xE5melding p\xE5g\xE5r"), _react.default.createElement("a", {
    href: "#",
    onClick: verticalStatusOnClick
  }, "Sjekk status"))));
}

var _default = HorizontalTimeline;
exports.default = _default;