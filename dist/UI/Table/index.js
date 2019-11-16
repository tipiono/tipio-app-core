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
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "table-responsive"
  }, _react.default.createElement("table", {
    className: "table table-borderless"
  }, _react.default.createElement("thead", {
    className: "tableHead"
  }, columns && columns.map(function (_ref) {
    var title = _ref.title;
    return _react.default.createElement("th", {
      className: "tableHead--item",
      scope: "col"
    }, title);
  })), _react.default.createElement("tbody", null, rows && rows.map(function (row) {
    return _react.default.createElement("tr", null, row && row.map(function (data) {
      return _react.default.createElement("td", null, data);
    }));
  })))));
}

var _default = Table;
exports.default = _default;