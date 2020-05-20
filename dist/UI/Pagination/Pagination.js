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
    className: "custom-pagination",
    "aria-label": "Page navigation"
  }, _react.default.createElement(_reactPaginate.default, {
    previousLabel: '',
    nextLabel: '',
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
  }));
}

var _default = Pagination;
exports.default = _default;