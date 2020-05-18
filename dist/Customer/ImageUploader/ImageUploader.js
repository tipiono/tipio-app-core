"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _uuid = _interopRequireDefault(require("uuid"));

var _reactDropzone = _interopRequireDefault(require("react-dropzone"));

var _Placeholder = _interopRequireDefault(require("./Placeholder"));

var _index = require("../../index");

var _IconButton = _interopRequireDefault(require("../../UI/Buttons/IconButton"));

var _RemoveImageIcon = _interopRequireDefault(require("../../UI/Icons/RemoveImageIcon"));

var _ErrorMessage = _interopRequireDefault(require("../../UI/ErrorMessage/ErrorMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ImageUploader(_ref) {
  var setFieldValue = _ref.setFieldValue,
      name = _ref.name,
      errors = _ref.errors,
      displayErrors = _ref.displayErrors,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["setFieldValue", "name", "errors", "displayErrors", "title"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showCropper = _useState2[0],
      setShowCropper = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      cropImage = _useState4[0],
      setCropImage = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      initialCropCompleted = _useState6[0],
      setInitialCropCompleted = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      croppedImageIndex = _useState8[0],
      setCroppedImageIndex = _useState8[1];

  var _useState9 = (0, _react.useState)(props.files ? props.files : []),
      _useState10 = _slicedToArray(_useState9, 2),
      files = _useState10[0],
      setFiles = _useState10[1];

  var onDrop = function onDrop(droppedFiles) {
    if (droppedFiles.length === 0) {
      return;
    }

    var acceptedFiles = droppedFiles.map(function (file) {
      return Object.assign(file, {
        id: _uuid.default.v4(),
        preview: URL.createObjectURL(file)
      });
    });
    var t = files.concat(acceptedFiles);
    setFiles(t);
    setFieldValue('files', t);
    setInitialCropCompleted(false);
    openCropper(acceptedFiles);
    setCroppedImageIndex(files && files.length + 1);
  };

  var openCropper = function openCropper(files) {
    setCropImage(files[0]);
    setShowCropper(true);
  };

  var removeImageButtonOnClick = function removeImageButtonOnClick(file) {
    var f = files.filter(function (x) {
      return x.id !== file.id;
    });
    URL.revokeObjectURL(file.preview);
    setFiles(f);
    setFieldValue('files', f);
  };

  var cropperModalOnClose = function cropperModalOnClose() {
    setShowCropper(false);
    setCropImage(null);
  };

  var cropperSetLoading = function cropperSetLoading() {};

  var cropperOnDone = function cropperOnDone(blob) {
    var croppedImageIndex = files.findIndex(function (x) {
      return x.id === cropImage.id;
    });
    setCroppedImageIndex(croppedImageIndex + 2);
    var icc = !initialCropCompleted && croppedImageIndex === (files && files.length) - 1;

    if (icc) {
      setInitialCropCompleted(true);
    }

    var tempImage = files[croppedImageIndex];
    var file = new File([blob], tempImage.name, {
      type: tempImage.type
    });
    file.id = tempImage.id;
    file.path = tempImage.path;
    file.preview = URL.createObjectURL(file);
    files[croppedImageIndex] = file;
    setFiles(_toConsumableArray(files));
    setFieldValue('files', files);

    if (!icc && !initialCropCompleted) {
      setCropImage(files[croppedImageIndex + 1]);
      setShowCropper(false);
      setShowCropper(true);
    } else {
      setShowCropper(false);
      setCropImage(null);
    }
  };

  var thumbs = null;

  if (files && files.length > 1) {
    thumbs = files.slice(1).map(function (file) {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: file.name,
        className: "uploadViewer__thumbnail--item"
      }, /*#__PURE__*/_react.default.createElement("img", {
        className: "uploadViewer__thumbnail--item--image",
        src: file.preview
      }), /*#__PURE__*/_react.default.createElement("span", {
        className: "uploadViewer__thumbnail--item--remove",
        onClick: function onClick(e) {
          e.preventDefault();
          removeImageButtonOnClick(file);
        }
      }, /*#__PURE__*/_react.default.createElement(_RemoveImageIcon.default, null)));
    });
  }

  var indicator = null;

  if (!initialCropCompleted) {
    indicator = /*#__PURE__*/_react.default.createElement("p", {
      className: "label-sm mb-0 mt-3",
      style: {
        textAlign: 'center'
      }
    }, croppedImageIndex, " av ", files && files.length);
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showCropper && /*#__PURE__*/_react.default.createElement(_index.ImageCropper, {
    title: title,
    image: cropImage,
    onDone: cropperOnDone,
    onClose: cropperModalOnClose,
    showCloseButton: initialCropCompleted,
    indicator: indicator,
    setLoading: cropperSetLoading
  }), /*#__PURE__*/_react.default.createElement(_reactDropzone.default, {
    accept: "image/*",
    onDrop: onDrop
  }, function (_ref2) {
    var getRootProps = _ref2.getRootProps,
        getInputProps = _ref2.getInputProps;
    return /*#__PURE__*/_react.default.createElement("section", {
      className: "uploadViewer"
    }, /*#__PURE__*/_react.default.createElement("div", getRootProps({
      className: 'dropzone',
      onClick: function onClick(event) {
        return event.preventDefault();
      }
    }), /*#__PURE__*/_react.default.createElement("input", getInputProps()), files && files.length === 0 && /*#__PURE__*/_react.default.createElement(_Placeholder.default, null)), files && files.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
      className: "uploadViewer__main"
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: "uploadViewer__main--image",
      src: files[0].preview
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: "uploadViewer__main--remove",
      onClick: function onClick(e) {
        e.preventDefault();
        removeImageButtonOnClick(files[0]);
      }
    }, /*#__PURE__*/_react.default.createElement(_RemoveImageIcon.default, null))), /*#__PURE__*/_react.default.createElement("aside", {
      className: "uploadViewer__thumbnail"
    }, thumbs), /*#__PURE__*/_react.default.createElement("div", getRootProps({
      className: 'dropzone'
    }), /*#__PURE__*/_react.default.createElement("input", getInputProps()), files && files.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
      className: "mt-3 mb-5"
    }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
      text: "Last opp produktbilder",
      onClick: function onClick(e) {
        e.preventDefault();
      }
    }))));
  }), displayErrors && errors && errors[name] && /*#__PURE__*/_react.default.createElement(_ErrorMessage.default, {
    content: errors[name].message,
    color: 'bg-red'
  }));
}

var _default = ImageUploader;
exports.default = _default;