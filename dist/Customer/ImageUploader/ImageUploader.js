"use strict";

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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ImageUploader(_ref) {
  var setFieldValue = _ref.setFieldValue,
      name = _ref.name,
      errors = _ref.errors,
      displayErrors = _ref.displayErrors;

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

  var _useState9 = (0, _react.useState)([]),
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
    setCroppedImageIndex(files.length + 1);
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

  var cropperOnDone = function cropperOnDone(blob) {
    var croppedImageIndex = files.findIndex(function (x) {
      return x.id === cropImage.id;
    });
    setCroppedImageIndex(croppedImageIndex + 2);
    var icc = !initialCropCompleted && croppedImageIndex === files.length - 1;

    if (icc) {
      setInitialCropCompleted(true);
    }

    var tempImage = files[croppedImageIndex];
    var file = new File([blob], tempImage.name);
    file.id = tempImage.id;
    file.path = tempImage.path;
    file.preview = URL.createObjectURL(file);
    files[croppedImageIndex] = file;
    setFiles(files);
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

  if (files.length > 1) {
    thumbs = files.slice(1).map(function (file) {
      return _react.default.createElement("div", {
        key: file.name,
        className: "uploadViewer__thumbnail--item"
      }, _react.default.createElement("img", {
        className: "uploadViewer__thumbnail--item--image",
        src: file.preview
      }), _react.default.createElement("span", {
        className: "uploadViewer__thumbnail--item--remove",
        onClick: function onClick(e) {
          e.preventDefault();
          removeImageButtonOnClick(file);
        }
      }, _react.default.createElement(_RemoveImageIcon.default, null)));
    });
  }

  var indicator = null;

  if (!initialCropCompleted) {
    indicator = _react.default.createElement("p", {
      className: "label-sm mb-0 mt-3",
      style: {
        textAlign: 'center'
      }
    }, croppedImageIndex, " av ", files.length);
  }

  return _react.default.createElement(_react.default.Fragment, null, showCropper && _react.default.createElement(_index.ImageCropper, {
    image: cropImage,
    onDone: cropperOnDone,
    onClose: cropperModalOnClose,
    showCloseButton: initialCropCompleted,
    indicator: indicator
  }), _react.default.createElement(_reactDropzone.default, {
    accept: "image/*",
    onDrop: onDrop
  }, function (_ref2) {
    var getRootProps = _ref2.getRootProps,
        getInputProps = _ref2.getInputProps;
    return _react.default.createElement("section", {
      className: "uploadViewer"
    }, _react.default.createElement("div", getRootProps({
      className: 'dropzone',
      onClick: function onClick(event) {
        return event.preventDefault();
      }
    }), _react.default.createElement("input", getInputProps()), files.length === 0 && _react.default.createElement(_Placeholder.default, null)), files.length > 0 && _react.default.createElement("div", {
      className: "uploadViewer__main"
    }, _react.default.createElement("img", {
      className: "uploadViewer__main--image",
      src: files[0].preview
    }), _react.default.createElement("span", {
      className: "uploadViewer__main--remove",
      onClick: function onClick(e) {
        e.preventDefault();
        removeImageButtonOnClick(files[0]);
      }
    }, _react.default.createElement(_RemoveImageIcon.default, null))), _react.default.createElement("aside", {
      className: "uploadViewer__thumbnail"
    }, thumbs), _react.default.createElement("div", getRootProps({
      className: 'dropzone'
    }), _react.default.createElement("input", getInputProps()), _react.default.createElement("div", {
      className: "mt-3 mb-5"
    }, files.length > 0 && _react.default.createElement(_IconButton.default, {
      text: "Last opp produktbilder",
      onClick: function onClick(e) {
        e.preventDefault();
      }
    }))));
  }), displayErrors && errors && errors[name] && _react.default.createElement(_ErrorMessage.default, {
    content: errors[name].message,
    color: "bg-red"
  }));
}

var _default = ImageUploader;
exports.default = _default;