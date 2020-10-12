"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ToggleSwitch = _interopRequireDefault(require("../../../UI/Forms/ToggleSwitch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrderItemCard = function OrderItemCard(_ref) {
  var order = _ref.order,
      deliveredOnChange = _ref.deliveredOnChange,
      dontShowOrderUpdate = _ref.dontShowOrderUpdate;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      activeOrder = _useState2[0],
      setActiveOrder = _useState2[1];

  var _order$order_addresse = _slicedToArray(order.order_addresses, 1),
      address = _order$order_addresse[0];

  address = address || {};

  var getDate = function getDate(date) {
    var dateStr = new Date(date);
  };

  var getFormattedDate = function getFormattedDate(date) {
    var dateStr = new Date(date);
    var year = dateStr.getFullYear();
    var month = (1 + dateStr.getMonth()).toString().padStart(2, '0');
    var day = dateStr.getDate().toString().padStart(2, '0');
    var hours = dateStr.getHours().toString().padStart(2, '0');
    var min = dateStr.getMinutes().toString().padStart(2, '0');
    return day + '.' + month + '.' + year + ' - ' + hours + ':' + min;
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("section", {
    className: "orderItem"
  }, !dontShowOrderUpdate && /*#__PURE__*/_react.default.createElement("div", {
    className: "orderItem__toggleSwitch"
  }, /*#__PURE__*/_react.default.createElement(_ToggleSwitch.default, {
    name: "delivered".concat(order.id),
    id: "delivered".concat(order.id),
    checked: order.delivered,
    onChange: deliveredOnChange,
    "data-order_id": order.id
  }), /*#__PURE__*/_react.default.createElement("span", null, order.delivered ? 'Levert' : 'Ikke levert')), /*#__PURE__*/_react.default.createElement("div", _defineProperty({
    className: "orderItem__content"
  }, "className", "orderItem__content ".concat(activeOrder ? 'orderActive' : '')), /*#__PURE__*/_react.default.createElement("div", {
    className: "orderItem__content--personalDetails"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "orderItem--row"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "userName w-33 p-bold"
  }, order.order_user.full_name), /*#__PURE__*/_react.default.createElement("p", {
    className: "w-33 p-bold"
  }, "Adresse: ", address.address), /*#__PURE__*/_react.default.createElement("p", {
    className: "w-33 p-bold post__sted"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Post sted: "), " ", address.city, ", ", address.zip_code)), /*#__PURE__*/_react.default.createElement("div", {
    className: "orderItem--row"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "w-33"
  }, "E-post: ", order.order_user.email), /*#__PURE__*/_react.default.createElement("p", {
    className: "w-33"
  }, "Nummer:", order.user.phone))), /*#__PURE__*/_react.default.createElement("div", {
    className: "border__bottom"
  }, order.order_products.map(function (order_product, i) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "orderItem__content--productDetails",
      key: order_product.id + i
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "orderItem--row"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "w-33 p-bold product__title"
    }, order_product.title), /*#__PURE__*/_react.default.createElement("p", {
      className: "w-33 orderNumber"
    }, "Ordrenummer: ", order_product.order_id), /*#__PURE__*/_react.default.createElement("div", {
      className: "w-33 antall__price"
    }, /*#__PURE__*/_react.default.createElement("p", null, "Antall: ", order_product.quantity), /*#__PURE__*/_react.default.createElement("p", null, "Pris: ", order_product.price, " Kr"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "orderItem--row"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "w-33"
    }, getFormattedDate(order_product.created_at)), /*#__PURE__*/_react.default.createElement("p", {
      className: "w-33 orderNumberMobile"
    }, "Ordrenummer: ", order_product.order_id), /*#__PURE__*/_react.default.createElement("p", {
      className: "w-33"
    }, "Betalingsm\xE5te: Kort"), (order_product === null || order_product === void 0 ? void 0 : order_product.tipio_offer_option_title) && /*#__PURE__*/_react.default.createElement("p", {
      className: "w-33"
    }, "St\xF8rrelse: ", order_product === null || order_product === void 0 ? void 0 : order_product.tipio_offer_option_title)));
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "orderItem__content--totalSum"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Totalsum"), /*#__PURE__*/_react.default.createElement("p", null, order.total_price, " Kr")), /*#__PURE__*/_react.default.createElement("div", {
    className: "orderItem__content--arrow",
    onClick: function onClick() {
      setActiveOrder(!activeOrder);
    }
  }, /*#__PURE__*/_react.default.createElement("svg", {
    width: 21,
    height: 13,
    viewBox: "0 0 21 13",
    fill: "none"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M10.51 12.2c-.33 0-.645-.13-.88-.36L.67 3a1.255 1.255 0 011.75-1.8l8.09 8 8.09-8A1.259 1.259 0 1120.36 3l-9 8.86a1.24 1.24 0 01-.85.34z",
    fill: "#8C8F91"
  }), /*#__PURE__*/_react.default.createElement("mask", {
    id: "prefix__a",
    maskUnits: "userSpaceOnUse",
    x: 0,
    y: 0,
    width: 21,
    height: 13
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M10.51 12.2c-.33 0-.645-.13-.88-.36L.67 3a1.255 1.255 0 011.75-1.8l8.09 8 8.09-8A1.259 1.259 0 1120.36 3l-9 8.86a1.24 1.24 0 01-.85.34z",
    fill: "#fff"
  })), /*#__PURE__*/_react.default.createElement("g", {
    mask: "url(#prefix__a)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#8C8F91",
    d: "M-2-6h50v50H-2z"
  })))))));
};

var _default = OrderItemCard;
exports.default = _default;