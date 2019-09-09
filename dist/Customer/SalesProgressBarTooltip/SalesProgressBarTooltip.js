"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SalesProgressBarTooltip(_ref) {
  var percentage = _ref.percentage;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "sales__progress my-3"
  }, _react.default.createElement("div", {
    className: "sales__progress--bar progress"
  }, _react.default.createElement("div", {
    className: "progress-bar w-".concat(percentage, " bg-secondary"),
    role: "progressbar",
    "aria-valuenow": "25",
    "aria-valuemin": "0",
    "aria-valuemax": "100"
  })), _react.default.createElement("div", {
    className: "sales__progress--tooltip middle"
  }, _react.default.createElement("svg", {
    className: "sales__progress--tooltip--icon",
    width: "17px",
    height: "15px",
    viewBox: "0 0 17 15"
  }, _react.default.createElement("g", {
    id: "Symbols",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("path", {
    d: "M10.44,2.52 C10.44,1.12896 11.56824,4.52970994e-14 12.96,4.52970994e-14 C14.35176,4.52970994e-14 15.48,1.12896 15.48,2.52 C15.48,3.91104 14.35176,5.04 12.96,5.04 C11.56824,5.04 10.44,3.91104 10.44,2.52 Z M11.16,2.52 C11.16,3.5136 11.9664,4.32 12.96,4.32 C13.95432,4.32 14.76,3.5136 14.76,2.52 C14.76,1.52568 13.95432,0.72 12.96,0.72 C11.9664,0.72 11.16,1.52568 11.16,2.52 Z M11.51568,5.04 L14.40432,5.04 C15.79392,5.04 16.92,6.16608 16.92,7.55568 L16.92,8.99064 C16.92,9.5868 16.43688,10.07136 15.84,10.07136 L15.48,10.07136 L15.48,14.04 C15.48,14.23872 15.31872,14.4 15.12,14.4 L10.8,14.4 C10.60128,14.4 10.44,14.23872 10.44,14.04 L10.44,10.07136 L10.08072,10.07136 C9.48384,10.07136 9,9.5868 9,8.99064 L9,7.55568 C9,6.16608 10.12608,5.04 11.51568,5.04 Z M9.72,8.99064 C9.72,9.19008 9.88056,9.35136 10.08072,9.35136 L10.8,9.35136 C10.99872,9.35136 11.16,9.51192 11.16,9.71064 L11.16,13.68 L14.76,13.68 L14.76,9.71064 C14.76,9.51192 14.92056,9.35136 15.12,9.35136 L15.84,9.35136 C16.03872,9.35136 16.2,9.19008 16.2,8.99064 L16.2,7.55568 C16.2,6.56352 15.39576,5.76 14.40432,5.76 L11.51568,5.76 C10.52352,5.76 9.72,6.56352 9.72,7.55568 L9.72,8.99064 Z M1.44,2.52 C1.44,1.12896 2.56824,4.52970994e-14 3.96,4.52970994e-14 C5.35176,4.52970994e-14 6.48,1.12896 6.48,2.52 C6.48,3.91104 5.35176,5.04 3.96,5.04 C2.56824,5.04 1.44,3.91104 1.44,2.52 Z M2.16,2.52 C2.16,3.5136 2.9664,4.32 3.96,4.32 C4.95432,4.32 5.76,3.5136 5.76,2.52 C5.76,1.52568 4.95432,0.72 3.96,0.72 C2.9664,0.72 2.16,1.52568 2.16,2.52 Z M2.51568,5.04 L5.40432,5.04 C6.79392,5.04 7.92,6.16608 7.92,7.55568 L7.92,8.99064 C7.92,9.5868 7.43688,10.07136 6.84,10.07136 L6.48,10.07136 L6.48,14.04 C6.48,14.23872 6.31872,14.4 6.12,14.4 L1.8,14.4 C1.60128,14.4 1.44,14.23872 1.44,14.04 L1.44,10.07136 L1.08072,10.07136 C0.48384,10.07136 3.5971226e-14,9.5868 3.5971226e-14,8.99064 L3.5971226e-14,7.55568 C3.5971226e-14,6.16608 1.12608,5.04 2.51568,5.04 Z M0.72,8.99064 C0.72,9.19008 0.88056,9.35136 1.08072,9.35136 L1.8,9.35136 C1.99872,9.35136 2.16,9.51192 2.16,9.71064 L2.16,13.68 L5.76,13.68 L5.76,9.71064 C5.76,9.51192 5.92056,9.35136 6.12,9.35136 L6.84,9.35136 C7.03872,9.35136 7.2,9.19008 7.2,8.99064 L7.2,7.55568 C7.2,6.56352 6.39576,5.76 5.40432,5.76 L2.51568,5.76 C1.52352,5.76 0.72,6.56352 0.72,7.55568 L0.72,8.99064 Z",
    id: "Combined-Shape",
    fill: "#5C6265"
  }))), _react.default.createElement("span", null, "36 har allerede kj\xF8pt!"))));
}

var _default = SalesProgressBarTooltip;
exports.default = _default;