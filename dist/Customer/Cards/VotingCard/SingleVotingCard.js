"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SecondaryOutlineButton = _interopRequireDefault(require("../../../UI/Buttons/SecondaryOutlineButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SingleVotingCard = function SingleVotingCard(_ref) {
  var title = _ref.title,
      brand = _ref.brand,
      image = _ref.image,
      joinCount = _ref.joinCount,
      expiresIn = _ref.expiresIn,
      onClick = _ref.onClick,
      joined = _ref.joined,
      shareOnClick = _ref.shareOnClick,
      voteOnClick = _ref.voteOnClick;
  return _react["default"].createElement("div", {
    className: "singleVotingCard"
  }, _react["default"].createElement("div", {
    className: "singleVotingCard__header"
  }, _react["default"].createElement("a", {
    className: "lazy-image singleVotingCard__header--preview",
    href: "/",
    onClick: onClick
  }, _react["default"].createElement("img", {
    className: "lazyload singleVotingCard__header--preview--image",
    src: image,
    alt: ""
  }))), _react["default"].createElement("div", {
    className: "singleVotingCard__body"
  }, _react["default"].createElement("div", {
    className: "singleVotingCard__body--content"
  }, _react["default"].createElement("a", {
    onClick: onClick,
    href: "/tipio/vote/".concat(id)
  }, _react["default"].createElement("h5", {
    className: "singleVotingCard__body--content--title"
  }, title)), brand && _react["default"].createElement("h4", {
    className: "singleVotingCard__body--content--description"
  }, brand)), _react["default"].createElement("h3", {
    className: "singleVotingCard__body--content--interested"
  }, joinCount, " interesserte"), _react["default"].createElement("span", {
    className: "singleVotingCard__body--showInterese"
  }, joined ? _react["default"].createElement(_SecondaryOutlineButton["default"], {
    text: "Del n\xE5",
    onClick: shareOnClick
  }) : _react["default"].createElement(_SecondaryOutlineButton["default"], {
    text: "Meld interesse",
    onClick: voteOnClick
  }))));
};

var _default = SingleVotingCard;
exports["default"] = _default;