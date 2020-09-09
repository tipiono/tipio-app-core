"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SecondaryOutlineButton = _interopRequireDefault(require("../../../UI/Buttons/SecondaryOutlineButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var PopularFeatureTipio = function PopularFeatureTipio(_ref) {
  var children = _ref.children,
      brand = _ref.brand,
      binding_count = _ref.binding_count,
      link = _ref.link,
      _ref$forceLoad = _ref.forceLoad,
      forceLoad = _ref$forceLoad === void 0 ? false : _ref$forceLoad,
      title = _ref.title,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ["children", "brand", "binding_count", "link", "forceLoad", "title", "onClick"]);

  return _react.default.createElement("div", {
    className: "mediumPopularTipio"
  }, _react.default.createElement("div", {
    className: "mediumPopularTipio__preview lazy-image",
    onClick: onClick
  }, _react.default.createElement("img", {
    className: "mediumPopularTipio__preview--image lazyload",
    src: props.images && props.images.length && props.images[0].blob_url,
    alt: ""
  })), _react.default.createElement("div", {
    className: "mediumPopularTipio__content"
  }, _react.default.createElement("a", {
    href: link,
    onClick: onClick,
    className: "text-truncate mediumPopularTipio__content--title",
    title: title
  }, title), _react.default.createElement("p", {
    className: "text-truncate mediumPopularTipio__content--description",
    title: brand
  }, brand), _react.default.createElement(_SecondaryOutlineButton.default, {
    text: "Gi tilbud",
    onClick: onClick
  })));
};

var _default = PopularFeatureTipio;
exports.default = _default;