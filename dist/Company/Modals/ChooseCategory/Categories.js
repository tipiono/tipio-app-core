"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _CategoriesForm = _interopRequireDefault(require("./CategoriesForm"));

var _Modal = require("../../../UI/Modal/Modal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Categories(props) {
  return /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    type: _Modal.ModalType.XLARGE,
    onCloseButtonClick: props.onClose,
    appendCenteredClass: false
  }, /*#__PURE__*/_react.default.createElement(_CategoriesForm.default, props));
}

var _default = Categories;
exports.default = _default;