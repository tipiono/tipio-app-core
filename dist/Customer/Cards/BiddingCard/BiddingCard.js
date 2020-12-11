"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TipioCountdown = _interopRequireDefault(require("../../../UI/TipioCountdown/TipioCountdown"));

var _SalesProgressBar = _interopRequireDefault(require("../../SalesProgressBar/SalesProgressBar"));

var _replaceWithSpace = _interopRequireDefault(require("../../../Util/replaceWithSpace"));

var _calculateDiscountPercentage = _interopRequireWildcard(require("../../../Util/calculateDiscountPercentage"));

var _NafMemberShip = _interopRequireDefault(require("../../../UI/Logo/NafMemberShip"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BiddingCard(_ref) {
  var id = _ref.id,
      image = _ref.image,
      title = _ref.title,
      brand = _ref.brand,
      expiresIn = _ref.expiresIn,
      salePrice = _ref.salePrice,
      costPrice = _ref.costPrice,
      children = _ref.children,
      inventory_available = _ref.inventory_available,
      onClick = _ref.onClick,
      maxJoinCount = _ref.maxJoinCount,
      joinCount = _ref.joinCount,
      bindHasExpired = _ref.bindHasExpired,
      link = _ref.link,
      hasNafMembership = _ref.hasNafMembership;
  var percentage = 100 + (0, _calculateDiscountPercentage.default)(maxJoinCount, joinCount);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "biddingCard"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "biddingCard__header"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: link ? link : "/tipio/bind/".concat(id),
    className: "lazy-image biddingCard__header--preview",
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "lazyload biddingCard__header--preview--image",
    "data-src": image,
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'%3E%3C/svg%3E",
    alt: ""
  })), expiresIn && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "imageSlider__discount"
  }, (0, _calculateDiscountPercentage.createDiscountLabel)(costPrice, salePrice)), /*#__PURE__*/_react.default.createElement("div", {
    className: "timeleft__countdown"
  }, /*#__PURE__*/_react.default.createElement(_TipioCountdown.default, {
    className: "timer",
    expires_in: expiresIn,
    soldOut: inventory_available === 0 ? true : false
  }))), hasNafMembership && /*#__PURE__*/_react.default.createElement("div", {
    className: "tipio__membership"
  }, /*#__PURE__*/_react.default.createElement(_NafMemberShip.default, null))), /*#__PURE__*/_react.default.createElement("div", {
    className: "biddingCard__body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "biddingCard__body--price"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "biddingCard__body--price--sale"
  }, salePrice && (0, _replaceWithSpace.default)(salePrice), " Kr"), /*#__PURE__*/_react.default.createElement("h4", {
    className: "biddingCard__body--price--cost"
  }, costPrice && (0, _replaceWithSpace.default)(costPrice), " Kr")), /*#__PURE__*/_react.default.createElement("div", {
    className: "biddingCard__body--content"
  }, /*#__PURE__*/_react.default.createElement("a", {
    onClick: onClick,
    href: "/tipio/bind/".concat(id)
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "biddingCard__body--content--title"
  }, title)), brand && /*#__PURE__*/_react.default.createElement("p", {
    className: "biddingCard__body--content--description"
  }, brand.toUpperCase())), /*#__PURE__*/_react.default.createElement("div", {
    className: "biddingCard__body--salesbar"
  }, !bindHasExpired && maxJoinCount && /*#__PURE__*/_react.default.createElement(_SalesProgressBar.default, {
    percentage: percentage,
    bindingCount: joinCount,
    totalCount: maxJoinCount
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "biddingCard__body--share"
  }, children))));
}

var _default = BiddingCard;
exports.default = _default;