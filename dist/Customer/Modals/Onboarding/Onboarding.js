"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactSwipe = _interopRequireDefault(require("react-swipe"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Onboarding = function Onboarding() {
  var swipeRef = (0, _react.useRef)(null);
  return _react.default.createElement("div", null, _react.default.createElement(_reactSwipe.default, {
    className: "carousel",
    swipeOptions: {
      continuous: false
    },
    ref: swipeRef
  }, _react.default.createElement("div", {
    className: "no-border"
  }, _react.default.createElement("div", {
    className: "wrapper"
  }, _react.default.createElement("div", {
    className: "content"
  }, _react.default.createElement("img", {
    alt: ""
  }), _react.default.createElement("p", null, "Alt du \xF8nsker deg til en bedre pris. Lim inn linken til produktet du vil ha og se hva som skjer!"), _react.default.createElement("button", {
    type: "button",
    className: "btn btn-secondary btn-lg",
    onClick: function onClick() {
      return swipeRef.current.next();
    }
  }, "Ok, neste tips"), _react.default.createElement("div", {
    className: "three-dots"
  }, _react.default.createElement("span", {
    className: "active"
  }, "."), _react.default.createElement("span", null, "."), _react.default.createElement("span", null, "."))))), _react.default.createElement("div", {
    className: "no-border"
  }, _react.default.createElement("div", {
    className: "wrapper"
  }, _react.default.createElement("div", {
    className: "content"
  }, _react.default.createElement("img", {
    alt: ""
  }), _react.default.createElement("p", null, "Alt du \xF8nsker deg til en bedre pris. Lim inn linken til produktet du vil ha og se hva som skjer!"), _react.default.createElement("button", {
    type: "button",
    className: "btn btn-secondary btn-lg",
    onClick: function onClick() {
      return swipeRef.current.next();
    }
  }, "Ok, neste tips"), _react.default.createElement("div", {
    className: "three-dots"
  }, _react.default.createElement("span", null, "."), _react.default.createElement("span", {
    className: "active"
  }, "."), _react.default.createElement("span", null, "."))))), _react.default.createElement("div", {
    className: "no-border"
  }, _react.default.createElement("div", {
    className: "wrapper"
  }, _react.default.createElement("div", {
    className: "content"
  }, _react.default.createElement("img", {
    alt: ""
  }), _react.default.createElement("p", null, "Alt du \xF8nsker deg til en bedre pris. Lim inn linken til produktet du vil ha og se hva som skjer!"), _react.default.createElement("button", {
    type: "button",
    className: "btn btn-secondary btn-lg"
  }, "Ok, skj\xF8nner"), _react.default.createElement("div", {
    className: "three-dots"
  }, _react.default.createElement("span", null, "."), _react.default.createElement("span", null, "."), _react.default.createElement("span", {
    className: "active"
  }, ".")))))));
};

var _default = Onboarding;
exports.default = _default;