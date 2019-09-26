"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _BaseCard = _interopRequireDefault(require("./BaseCard"));

var _ShareButton = _interopRequireDefault(require("./ShareButton"));

var _SecondaryOutlineButton = _interopRequireDefault(require("../../UI/Buttons/SecondaryOutlineButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var VotingCard = function VotingCard(_ref) {
  var children = _ref.children,
      state = _ref.state;
  return _react.default.createElement(_BaseCard.default, null, state !== 'interested' && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "customerSidebarCard__footer--action"
  }, _react.default.createElement(_SecondaryOutlineButton.default, {
    text: 'Meld interesse'
  })), _react.default.createElement("p", {
    className: "customerSidebarCard__footer--alert"
  }, "Dette er ikke bindende")), state === 'interested' && _react.default.createElement("div", {
    className: "customerSidebarCard__footer--action"
  }, _react.default.createElement(_ShareButton.default, null)), _react.default.createElement("p", {
    className: "customerSidebarCard__footer--interestedCounter"
  }, "Allerede 221 Interesserte!"));
};

var _default = VotingCard;
exports.default = _default;