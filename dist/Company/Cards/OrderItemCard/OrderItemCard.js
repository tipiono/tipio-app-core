"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ToggleSwitch = _interopRequireDefault(require("../../../UI/Forms/ToggleSwitch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrderItemCard = function OrderItemCard(_ref) {
  var order = _ref.order,
      deliveredOnChange = _ref.deliveredOnChange;

  var _order$order_addresse = _slicedToArray(order.order_addresses, 1),
      address = _order$order_addresse[0];

  address = address || {};
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("tbody", {
    className: "orderItemCard"
  }, _react["default"].createElement("tr", {
    className: "orderItemCard__customerDetail"
  }, _react["default"].createElement("td", null, _react["default"].createElement(_ToggleSwitch["default"], {
    name: "delivered".concat(order.id),
    id: "delivered".concat(order.id),
    checked: order.delivered,
    onChange: deliveredOnChange,
    "data-order_id": order.id
  }), _react["default"].createElement("span", null, order.delivered ? 'Levert' : 'Ikke levert')), _react["default"].createElement("td", {
    className: "orderItemCard__customerDetail--name"
  }, order.order_user.full_name), _react["default"].createElement("td", {
    className: "orderItemCard__customerDetail--address"
  }, "Adresse: ", address.address), _react["default"].createElement("td", {
    className: "orderItemCard__customerDetail--address"
  }, address.city, ", ", address.zip_code), _react["default"].createElement("td", null)), _react["default"].createElement("tr", {
    className: "border-bottom-1"
  }, _react["default"].createElement("td", null), _react["default"].createElement("td", null, "E-post: ", order.order_user.email), _react["default"].createElement("td", null, "Nummer: 987 67 890"), _react["default"].createElement("td", null), _react["default"].createElement("td", null)), order.order_products.map(function (order_product) {
    return _react["default"].createElement("tr", {
      className: "orderItemCard__orderDetail"
    }, _react["default"].createElement("td", null), _react["default"].createElement("td", {
      className: "orderItemCard__orderDetail--productName"
    }, order_product.title), _react["default"].createElement("td", null, "Ordrenummer: 89674590"), _react["default"].createElement("td", null, "Antall: ", order_product.quantity, " "), _react["default"].createElement("td", null, "Pris: ", order_product.price, " Kr"));
  }), _react["default"].createElement("tr", {
    className: "border-bottom-2"
  }, _react["default"].createElement("td", null), _react["default"].createElement("td", null, "30.06.2019 - 13:09"), _react["default"].createElement("td", null, "Betalingsm\xE5te: Kort"), _react["default"].createElement("td", null, "St\xF8rrelse: 46"), _react["default"].createElement("td", null)), _react["default"].createElement("tr", {
    className: "orderItemCard__orderAmount"
  }, _react["default"].createElement("td", null), _react["default"].createElement("td", {
    className: "orderItemCard__orderAmount--label"
  }, "Totalsum"), _react["default"].createElement("td", null), _react["default"].createElement("td", null), _react["default"].createElement("td", {
    className: "orderItemCard__orderAmount--price"
  }, order.total_price, " Kr"))), _react["default"].createElement("br", null));
};

var _default = OrderItemCard;
exports["default"] = _default;