"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Table(props) {
  var rows = props.rows,
      columns = props.columns;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "table-responsive"
  }, /*#__PURE__*/_react.default.createElement("table", {
    className: "table table-borderless"
  }, /*#__PURE__*/_react.default.createElement("thead", {
    className: "tableHead"
  }, /*#__PURE__*/_react.default.createElement("tr", null, columns && columns.map(function (_ref) {
    var title = _ref.title,
        i = _ref.i;
    return /*#__PURE__*/_react.default.createElement("th", {
      className: "tableHead--item",
      scope: "col",
      key: title + ':' + i
    }, title);
  }))), /*#__PURE__*/_react.default.createElement("tbody", {
    className: "tableBody"
  }, rows && rows.map(function (row, i) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: 'row:' + i
    }, row && row.map(function (data, i) {
      return /*#__PURE__*/_react.default.createElement("td", {
        key: data + ':' + i
      }, data);
    }));
  })))));
}

var _default = Table;
exports.default = _default;