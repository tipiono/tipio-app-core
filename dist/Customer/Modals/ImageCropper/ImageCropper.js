"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Modal = require("../../../UI/Modal/Modal");

require("cropperjs/dist/cropper.css");

var _cropperjs = _interopRequireDefault(require("cropperjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ImageCropper =
/*#__PURE__*/
function (_Component) {
  _inherits(ImageCropper, _Component);

  function ImageCropper(props) {
    var _this;

    _classCallCheck(this, ImageCropper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageCropper).call(this, props));
    _this.modalOnClose = _this.modalOnClose.bind(_assertThisInitialized(_this));
    _this.cropDoneOnClick = _this.cropDoneOnClick.bind(_assertThisInitialized(_this));
    _this.state = {
      cropperReady: false,
      cropperInstance: null,
      isSubmitting: false
    };
    return _this;
  }

  _createClass(ImageCropper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var setCropperReady = function setCropperReady(cropperInstance) {
        setTimeout(function () {
          _this2.setState({
            cropperReady: true,
            cropperInstance: cropperInstance
          });
        }, 500);
      };

      var image = document.getElementById('image');
      var cropper = new _cropperjs.default(image, {
        // aspectRatio: this.props.aspectRatio || 2 / 3,
        // modal: false,
        background: false,
        crop: function crop(event) {},
        ready: function ready() {
          setCropperReady(cropper);
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.state.cropperInstance.destroy();
    }
  }, {
    key: "modalOnClose",
    value: function modalOnClose() {
      // this.setState({showCropModal: false, cropImage: null, cropperReady: false});
      this.props.onClose();
    }
  }, {
    key: "cropDoneOnClick",
    value: function cropDoneOnClick(e) {
      var _this3 = this;

      e.preventDefault();
      this.setState({
        isSubmitting: true
      });
      this.state.cropperInstance.getCroppedCanvas().toBlob(function (blob) {
        _this3.props.onDone(blob);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var showCloseButton = this.props.showCloseButton;
      var modalOnClose = this.modalOnClose;

      if (!showCloseButton) {
        modalOnClose = function modalOnClose() {};
      }

      return _react.default.createElement("div", null, _react.default.createElement(_Modal.Modal, {
        showCloseButton: showCloseButton,
        type: _Modal.ModalType.LARGE,
        onCloseButtonClick: modalOnClose
      }, _react.default.createElement("div", {
        className: "cropper-wrapper"
      }, _react.default.createElement("div", {
        className: "cropper-content"
      }, _react.default.createElement("h3", null, "Tilpass bilde for mobil"), !this.state.cropperReady && _react.default.createElement("div", {
        className: "d-flex justify-content-center"
      }, _react.default.createElement("div", {
        className: "spinner-border",
        role: "status"
      }, _react.default.createElement("span", {
        className: "sr-only"
      }, "Loading..."))), _react.default.createElement("div", {
        style: {
          opacity: this.state.cropperReady ? 100 : 0,
          width: "300px",
          height: "300px"
        }
      }, _react.default.createElement("img", {
        id: "image",
        src: this.props.image.preview
      })), this.props.indicator && this.props.indicator, _react.default.createElement("button", {
        type: "button",
        className: "btn btn-secondary w-100 mt-4 mb-6",
        onClick: this.cropDoneOnClick,
        disabled: this.state.isSubmitting
      }, !this.state.isSubmitting && 'Neste', this.state.isSubmitting && _react.default.createElement("span", null, " ", _react.default.createElement("span", {
        className: "spinner-border spinner-border-sm",
        role: "status",
        "aria-hidden": "true"
      }), " Loading..."))))));
    }
  }]);

  return ImageCropper;
}(_react.Component);

var _default = ImageCropper;
exports.default = _default;