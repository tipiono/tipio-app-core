"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Modal = require("../Modal");

require("cropperjs/dist/cropper.css");

var _cropperjs = _interopRequireDefault(require("cropperjs"));

var _GrayOutlineButton = _interopRequireDefault(require("../../Buttons/GrayOutlineButton"));

var _SecondaryButton = _interopRequireDefault(require("../../Buttons/SecondaryButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ImageCropper = /*#__PURE__*/function (_Component) {
  _inherits(ImageCropper, _Component);

  var _super = _createSuper(ImageCropper);

  function ImageCropper(props) {
    var _this;

    _classCallCheck(this, ImageCropper);

    _this = _super.call(this, props);
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
        aspectRatio: this.props.aspectRatio || '',
        // modal: false,
        background: false,
        crop: function crop(event) {},
        ready: function ready() {
          setCropperReady(cropper);
        },
        viewMode: 1,
        autoCropArea: 1
      });
    } // componentWillUnmount() {
    //     //this.props.onClose();
    //     this.state.cropperInstance.destroy();
    // }

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
      this.props.setLoading(true);
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

      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
        showCloseButton: true,
        onCloseButtonClick: this.modalOnClose
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "imageCropper"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "imageCropper__content"
      }, /*#__PURE__*/_react.default.createElement("h3", {
        className: "imageCropper__content--title"
      }, this.props.title), !this.state.cropperReady && /*#__PURE__*/_react.default.createElement("div", {
        className: "d-flex justify-content-center"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "spinner-border",
        role: "status"
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "sr-only"
      }, "Loading..."))), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          opacity: this.state.cropperReady ? 100 : 0,
          width: '350px',
          height: '350px'
        }
      }, /*#__PURE__*/_react.default.createElement("img", {
        id: "image",
        src: this.props.image.preview
      })), this.props.indicator && this.props.indicator, /*#__PURE__*/_react.default.createElement("ul", {
        className: "imageCropper__content__action"
      }, /*#__PURE__*/_react.default.createElement("li", {
        className: "imageCropper__content__action--cancel"
      }, /*#__PURE__*/_react.default.createElement(_GrayOutlineButton.default, {
        text: 'Avbryt',
        onClick: this.modalOnClose,
        disabled: this.props.isSubmitting
      })), /*#__PURE__*/_react.default.createElement("li", {
        className: "imageCropper__content__action--next"
      }, /*#__PURE__*/_react.default.createElement(_SecondaryButton.default, {
        text: 'Neste',
        onClick: this.cropDoneOnClick,
        loading: this.props.isSubmitting
      })))))));
    }
  }]);

  return ImageCropper;
}(_react.Component);

var _default = ImageCropper;
exports.default = _default;