"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactMasonryCss = _interopRequireDefault(require("react-masonry-css"));

var _Pagination = _interopRequireDefault(require("../../UI/Pagination/Pagination"));

var _withAnimation = _interopRequireDefault(require("../../effects/withAnimation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var breakpointColumnsObj = function breakpointColumnsObj() {
  var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
  return {
    default: max,
    1100: max - 1,
    700: max - 2,
    500: max - 2
  };
};

var TipioFeedWithWrapper = function TipioFeedWithWrapper(props) {
  var items = [];

  if (props.tipios) {
    for (var i = 0; i < props.tipios.length; i += 1) {
      var item = props.tipios[i]; // if (i === 0 && showAddTipioButton) {
      //     items.push("<AddTipioButton />");
      // }

      if (props.card) {
        items.push(_react.default.createElement("div", {
          className: "mb-3 mb-md-4"
        }, _react.default.createElement(_withAnimation.default, null, props.card(item))));
      }
    }
  }

  var showPrevButton = props.pageCount && props.page > 1;
  var showNextButton = props.pageCount && props.page < props.pageCount;
  var imgCountClassName = {
    1: 'one',
    2: 'one-half',
    3: 'one-quarter'
  };
  var v = imgCountClassName[props.tipios.length + 1];
  var selectImagesClass = v ? v : 'one-quarter';
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: props.rootContainerClass
  }, _react.default.createElement("div", {
    className: "container"
  }, _react.default.createElement(_reactMasonryCss.default, {
    breakpointCols: breakpointColumnsObj(props.itemsPerRow || 4),
    className: 'my-masonry-grid ' + selectImagesClass,
    columnClassName: "my-masonry-grid_column"
  }, items), props.loading && _react.default.createElement("div", {
    className: "d-flex justify-content-center"
  }, _react.default.createElement("div", {
    className: "spinner-border",
    role: "status"
  }, _react.default.createElement("span", {
    className: "sr-only"
  }, "Loading..."))))), props.tipios && props.tipios.length > 0 && props.page > 0 && _react.default.createElement("div", {
    className: "d-flex justify-content-center my-4 pb-5"
  }, _react.default.createElement(_Pagination.default, {
    page: props.page,
    pageCount: props.pageCount,
    showPrevButton: showPrevButton,
    showNextButton: showNextButton,
    handlePageClick: props.handlePageClick
  })));
};

TipioFeedWithWrapper.propTypes = {
  tipios: _propTypes.default.array,
  page: _propTypes.default.number,
  pageCount: _propTypes.default.number,
  loading: _propTypes.default.bool,
  favoriteMap: _propTypes.default.object,
  handlePageClick: _propTypes.default.func,
  handleFavoriteClick: _propTypes.default.func
};
var _default = TipioFeedWithWrapper;
exports.default = _default;