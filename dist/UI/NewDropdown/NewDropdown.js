"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewDropdown = NewDropdown;
exports.NewDropdownItem = NewDropdownItem;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function NewDropdown(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      dropDownVisibility = _useState2[0],
      setDropDownVisibility = _useState2[1];

  var visible = props.controlled ? props.visible : dropDownVisibility;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)('dropdown', props.direction)
  }, _react.default.createElement("a", {
    className: "dropdown-toggle",
    href: "#",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    onClick: function onClick(e) {
      e.preventDefault();

      if (props.controlled) {
        props.setDropDownVisibility(!props.visible);
      } else {
        setDropDownVisibility(!dropDownVisibility);
      }
    }
  }, props.title), _react.default.createElement("div", {
    className: (0, _classnames.default)('dropdown-menu', props.aligned, {
      'show': visible,
      'd-none': !visible
    })
  }, _react.default.Children.map(props.children, function (child) {
    return child;
  })));
}

function NewDropdownItem(props) {
  return _react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, props.children);
}