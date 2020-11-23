"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SecondaryOutlineButton = _interopRequireDefault(require("../../../UI/Buttons/SecondaryOutlineButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SingleVotingCard = function SingleVotingCard(_ref) {
  var title = _ref.title,
      brand = _ref.brand,
      image = _ref.image,
      joinCount = _ref.joinCount,
      expiresIn = _ref.expiresIn,
      onClick = _ref.onClick,
      joined = _ref.joined,
      shareOnClick = _ref.shareOnClick,
      voteOnClick = _ref.voteOnClick,
      id = _ref.id;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "singleVotingCard"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "singleVotingCard__header"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "lazy-image singleVotingCard__header--preview",
    href: "/",
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "lazyload singleVotingCard__header--preview--image",
    src: image,
    alt: ""
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "singleVotingCard__body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "singleVotingCard__body--content"
  }, /*#__PURE__*/_react.default.createElement("a", {
    onClick: onClick,
    href: "/tipio/vote/".concat(id)
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "singleVotingCard__body--content--title"
  }, title)), brand && /*#__PURE__*/_react.default.createElement("h4", {
    className: "singleVotingCard__body--content--description"
  }, brand)), /*#__PURE__*/_react.default.createElement("h3", {
    className: "singleVotingCard__body--content--interested"
  }, joinCount, " interesserte"), /*#__PURE__*/_react.default.createElement("span", {
    className: "singleVotingCard__body--showInterese"
  }, joined ? /*#__PURE__*/_react.default.createElement(_SecondaryOutlineButton.default, {
    text: "Del n\xE5",
    onClick: shareOnClick
  }) : /*#__PURE__*/_react.default.createElement(_SecondaryOutlineButton.default, {
    text: "F\xE5 tilbudsvarsel",
    onClick: voteOnClick
  }))));
};

var _default = SingleVotingCard;
exports.default = _default;