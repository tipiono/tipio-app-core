"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
    className: "orderItem"
  }, !dontShowOrderUpdate && _react.default.createElement("div", {
    className: "orderItem__toggleSwitch"
  }, _react.default.createElement(_ToggleSwitch.default, {
    name: "delivered".concat(order.id),
    id: "delivered".concat(order.id),
    checked: order.delivered,
    onChange: deliveredOnChange,
    "data-order_id": order.id
  }), _react.default.createElement("span", null, order.delivered ? 'Levert' : 'Ikke levert')), _react.default.createElement("div", _defineProperty({
    className: "orderItem__content"
  }, "className", "orderItem__content ".concat(activeOrder ? 'orderActive' : '')), _react.default.createElement("div", {
    className: "orderItem__content--personalDetails"
  }, _react.default.createElement("div", {
    className: "orderItem--row"
  }, _react.default.createElement("p", {
    className: "userName w-33 p-bold"
  }, order.order_user.full_name), _react.default.createElement("p", {
    className: "w-33 p-bold"
  }, "Adresse: ", address.address), _react.default.createElement("p", {
    className: "w-33 p-bold post__sted"
  }, _react.default.createElement("span", null, "Post sted: "), " ", address.city, ", ", address.zip_code)), _react.default.createElement("div", {
    className: "orderItem--row"
  }, _react.default.createElement("p", {
    className: "w-33"
  }, "E-post: ", order.order_user.email), _react.default.createElement("p", {
    className: "w-33"
  }, "Nummer:", order.user.phone))), _react.default.createElement("div", {
    className: "border__bottom"
  }, order.order_products.map(function (order_product, i) {
    return _react.default.createElement("div", {
      className: "orderItem__content--productDetails",
      key: order_product.id + i
    }, _react.default.createElement("div", {
      className: "orderItem--row"
    }, _react.default.createElement("p", {
      className: "w-33 p-bold product__title"
    }, order_product.title), _react.default.createElement("p", {
      className: "w-33 orderNumber"
    }, "Ordrenummer: ", order_product.order_id), _react.default.createElement("div", {
      className: "w-33 antall__price"
    }, _react.default.createElement("p", null, "Antall: ", order_product.quantity), _react.default.createElement("p", null, "Pris: ", order_product.price, " Kr"))), _react.default.createElement("div", {
      className: "orderItem--row"
    }, _react.default.createElement("p", {
      className: "w-33"
    }, getFormattedDate(order_product.created_at)), _react.default.createElement("p", {
      className: "w-33 orderNumberMobile"
    }, "Ordrenummer: ", order_product.order_id), _react.default.createElement("p", {
      className: "w-33"
    }, "Betalingsm\xE5te: Kort"), (order_product === null || order_product === void 0 ? void 0 : order_product.tipio_offer_option_title) && _react.default.createElement("p", {
      className: "w-33"
    }, "St\xF8rrelse: ", order_product === null || order_product === void 0 ? void 0 : order_product.tipio_offer_option_title)));
  })), _react.default.createElement("div", {
    className: "orderItem__content--totalSum"
  }, _react.default.createElement("p", null, "Totalsum"), _react.default.createElement("p", null, order.total_price, " Kr")), _react.default.createElement("div", {
    className: "orderItem__content--arrow",
    onClick: function onClick() {
      setActiveOrder(!activeOrder);
    }
  }, _react.default.createElement("svg", {
    width: 21,
    height: 13,
    viewBox: "0 0 21 13",
    fill: "none"
  }, _react.default.createElement("path", {
    d: "M10.51 12.2c-.33 0-.645-.13-.88-.36L.67 3a1.255 1.255 0 011.75-1.8l8.09 8 8.09-8A1.259 1.259 0 1120.36 3l-9 8.86a1.24 1.24 0 01-.85.34z",
    fill: "#8C8F91"
  }), _react.default.createElement("mask", {
    id: "prefix__a",
    maskUnits: "userSpaceOnUse",
    x: 0,
    y: 0,
    width: 21,
    height: 13
  }, _react.default.createElement("path", {
    d: "M10.51 12.2c-.33 0-.645-.13-.88-.36L.67 3a1.255 1.255 0 011.75-1.8l8.09 8 8.09-8A1.259 1.259 0 1120.36 3l-9 8.86a1.24 1.24 0 01-.85.34z",
    fill: "#fff"
  })), _react.default.createElement("g", {
    mask: "url(#prefix__a)"
  }, _react.default.createElement("path", {
    fill: "#8C8F91",
    d: "M-2-6h50v50H-2z"
  })))))));
};

var _default = OrderItemCard;
exports.default = _default;