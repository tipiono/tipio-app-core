"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactMasonryCss = _interopRequireDefault(require("react-masonry-css"));

var _Image = _interopRequireDefault(require("./Image"));

var _initSelectedOrder = _interopRequireDefault(require("./utils/initSelectedOrder"));

var _SecondaryButton = _interopRequireDefault(require("../Buttons/SecondaryButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 2
};
var imgCountClassName = {
  1: 'one',
  2: 'one-half',
  3: 'one-third'
};

function SelectImages(_ref) {
  var images = _ref.images,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["images", "title"]);

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      selectedMax = _useState2[0],
      setSelectedMax = _useState2[1];

  var _useState3 = (0, _react.useState)((0, _initSelectedOrder.default)(images)),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedOrder = _useState4[0],
      setSelectedOrder = _useState4[1];

  var _onChange = function _onChange(e) {
    var checked = e.target.checked;
    var currentOrder = selectedOrder[e.target.value];
    var sm = selectedMax;
    var so = selectedOrder;

    if (!checked) {
      if (currentOrder < sm) {
        so = Object.keys(so).reduce(function (prev, key) {
          var v = so[key];
          prev[key] = v > currentOrder ? v - 1 : v;
          return prev;
        }, {});
      }

      so[e.target.value] = 0;
    } else {
      so[e.target.value] = sm + 1;
    }

    sm += checked ? 1 : -1;
    setSelectedMax(sm);
    setSelectedOrder(so);
  };

  var _onSubmit = function _onSubmit() {
    var sorted = Object.keys(selectedOrder).map(function (x) {
      return {
        id: x,
        order: selectedOrder[x]
      };
    }).filter(function (x) {
      return x.order > 0;
    }).sort(function (p1, p2) {
      return p1.order - p2.order;
    });
    var imgs = images;
    var result = [];

    for (var i = 0; i < sorted.length; i += 1) {
      result.push({
        img: imgs[sorted[i].id],
        order: sorted[i].order
      });
    }

    if (props.onSubmit) {
      props.onSubmit(result);
    }
  };

  var v = imgCountClassName[images.length];
  var selectImagesClass = v ? v : 'one-quarter';
  var imagesMapped = images.map(function (item, index) {
    return {
      id: index,
      src: item
    };
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "select-images"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "layout-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement(_reactMasonryCss.default, {
    breakpointCols: breakpointColumnsObj,
    className: 'layout-content ' + selectImagesClass,
    columnClassName: "my-masonry-grid_column"
  }, imagesMapped.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(_Image.default, {
      key: index,
      image: item,
      selectedIndex: selectedOrder[item.id],
      onChange: _onChange
    });
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-sm-12 col-md-4 mx-auto"
  }, /*#__PURE__*/_react.default.createElement(_SecondaryButton.default, {
    text: "Neste",
    onClick: _onSubmit,
    disabled: selectedMax === 0
  })))))));
}

var _default = SelectImages;
exports.default = _default;