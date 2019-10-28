"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _SearchIcon = _interopRequireDefault(require("../../Icons/SearchIcon"));

var _CloseIcon = _interopRequireDefault(require("../../Icons/CloseIcon"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SearchInput = function SearchInput(props) {
  /**
   * State
   */
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];
  /**
   * Effects
   */


  var escFunction = (0, _react.useCallback)(function (event) {
    if (event.keyCode === 27) {
      setShow(false);
    }
  }, []);
  (0, _react.useEffect)(function () {
    document.addEventListener('keydown', escFunction, false);
    return function () {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, []);

  var _onKeyUp = function _onKeyUp(e) {
    e.preventDefault();

    if (e.key === 'Enter') {
      props.searchFormOnSubmit(e.target.value);
    }
  };

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("a", {
    href: "#",
    className: (0, _classnames.default)("nav-list-link", {
      'd-none': show
    }),
    onClick: function onClick(e) {
      e.preventDefault();
      setShow(true);
    }
  }, _react.default.createElement(_SearchIcon.default, null)), _react.default.createElement("div", {
    className: (0, _classnames.default)("searchInput", {
      show: show
    })
  }, _react.default.createElement("div", {
    className: "searchInput__form"
  }, _react.default.createElement("div", {
    className: "searchInput__form--leftIcon"
  }, _react.default.createElement(_SearchIcon.default, null)), _react.default.createElement("input", {
    id: "search-layout",
    ref: function ref(input) {
      return input && input.focus();
    } // onKeyUp={_onKeyUp}
    ,
    type: "text",
    className: "searchInput__form--input",
    placeholder: "S\xF8k produkt, navn merke..."
  }), _react.default.createElement("a", {
    className: "searchInput__form--rightIcon",
    href: "#",
    onClick: function onClick() {
      setShow(false);
    }
  }, _react.default.createElement(_CloseIcon.default, null)))));
};

var _default = SearchInput;
exports.default = _default;