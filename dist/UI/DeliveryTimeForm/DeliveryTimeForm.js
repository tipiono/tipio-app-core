"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _timer = _interopRequireDefault(require("../../static/assets/images/timer.svg"));

var _Input = _interopRequireDefault(require("../Forms/Input"));

var _Select = _interopRequireDefault(require("../Forms/Select"));

var _Checkbox = _interopRequireDefault(require("../Forms/Checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DeliveryTimeForm = function DeliveryTimeForm(_ref) {
  var showIcon = _ref.showIcon,
      showCheckbox = _ref.showCheckbox;
  return _react["default"].createElement("div", {
    className: "deliveryTimeForm"
  }, _react["default"].createElement("div", {
    className: "deliveryTimeForm__header"
  }, showIcon ? _react["default"].createElement("img", {
    className: "deliveryTimeForm__header__icon",
    src: _timer["default"],
    alt: ""
  }) : '', _react["default"].createElement("h5", {
    className: "deliveryTimeForm__header__title"
  }, "Forventet leveringstid")), _react["default"].createElement("div", {
    className: "deliveryTimeForm__row"
  }, _react["default"].createElement("div", {
    className: "deliveryTimeForm__row__from"
  }, _react["default"].createElement(_Input["default"], {
    placeholder: "Fra",
    name: "" // onChange={handleChange}
    // onBlur={handleBlur}
    // value={values.expiration_date}
    // errors={touched.expiration_date && errors}
    ,
    displayErrors: true
  })), _react["default"].createElement("div", {
    className: "deliveryTimeForm__row__to"
  }, _react["default"].createElement(_Input["default"], {
    placeholder: "Til",
    name: "" // onChange={handleChange}
    // onBlur={handleBlur}
    // value={values.expiration_date}
    // errors={touched.expiration_date && errors}
    ,
    displayErrors: true
  })), _react["default"].createElement("div", {
    className: "deliveryTimeForm__row__period"
  }, _react["default"].createElement(_Select["default"], {
    defaultValue: 'Virkedager',
    label: "Tidwsrom",
    options: ['Virkedager', 'Uker', 'Måneder']
  }))), showCheckbox ? _react["default"].createElement(_Checkbox["default"], {
    id: "save_payment_info",
    label: "Sett som standard leverings tid" // checked={values.save_payment_info}
    // onChange={handleChange}

  }) : '');
};

var _default = DeliveryTimeForm;
exports["default"] = _default;