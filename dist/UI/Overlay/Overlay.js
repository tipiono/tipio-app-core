"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _useLockBodyScroll = _interopRequireDefault(require("../../Hooks/useLockBodyScroll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Overlay = function Overlay(_ref) {
  var _onClick = _ref.onClick,
      opacity = _ref.opacity,
      top = _ref.top;
  (0, _useLockBodyScroll.default)();
  return _react.default.createElement("a", {
    onClick: function onClick(e) {
      e.preventDefault();

      _onClick();
    }
  }, _react.default.createElement("div", {
    className: "overlay show",
    style: {
      opacity: opacity,
      top: top || 0
    }
  }));
};

var _default = Overlay;
exports.default = _default;