"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactPaginate = _interopRequireDefault(require("react-paginate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Pagination(_ref) {
  var page = _ref.page,
      pageCount = _ref.pageCount,
      showPrevButton = _ref.showPrevButton,
      showNextButton = _ref.showNextButton,
      handlePageClick = _ref.handlePageClick;
  return _react.default.createElement("nav", {
    className: "pagination",
    "aria-label": "Page navigation"
  }, showPrevButton && _react.default.createElement("a", {
    className: "page-link-prev",
    href: "#",
    "aria-label": "Previous",
    onClick: function onClick() {
      handlePageClick({
        selected: parseInt(page - 2)
      });
    }
  }, _react.default.createElement("svg", {
    className: "left-arrow",
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    viewBox: "0 0 24 24"
  }, _react.default.createElement("g", {
    className: "nc-icon-wrapper",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    fill: "#5c6265",
    stroke: "#5c6265"
  }, _react.default.createElement("polyline", {
    fill: "none",
    stroke: "#5c6265",
    strokeMiterlimit: "10",
    points: "17,2 7,12 17,22 ",
    transform: "translate(0, 0)"
  })))), _react.default.createElement(_reactPaginate.default, {
    previousLabel: null,
    nextLabel: null,
    breakLabel: '...',
    breakClassName: 'break-me',
    pageCount: pageCount,
    marginPagesDisplayed: 2,
    pageRangeDisplayed: 5,
    onPageChange: handlePageClick,
    containerClassName: 'pagination-content',
    activeClassName: 'active',
    pageClassName: 'page-item',
    pageLinkClassName: 'page-link',
    forcePage: page - 1
  }), showNextButton && _react.default.createElement("a", {
    className: "page-link-next",
    href: "#",
    "aria-label": "Next",
    onClick: function onClick() {
      handlePageClick({
        selected: parseInt(page)
      });
    }
  }, _react.default.createElement("svg", {
    className: "right-arrow",
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    viewBox: "0 0 24 24"
  }, _react.default.createElement("g", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    fill: "#5c6265",
    stroke: "#5c6265"
  }, _react.default.createElement("polyline", {
    fill: "none",
    stroke: "#5c6265",
    strokeMiterlimit: "10",
    points: "7,2 17,12 7,22 ",
    transform: "translate(0, 0)"
  })))));
}

var _default = Pagination;
exports.default = _default;