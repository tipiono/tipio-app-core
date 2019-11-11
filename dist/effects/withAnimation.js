"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function FadeInSection(props) {
  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isVisible = _React$useState2[0],
      setVisible = _React$useState2[1];

  var domRef = _react.default.useRef();

  _react.default.useEffect(function () {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        return setVisible(entry.isIntersecting);
      });
    });
    observer.observe(domRef.current);
  }, []);

  return _react.default.createElement("div", {
    className: "fade-in-section ".concat(isVisible ? 'is-visible' : ''),
    ref: domRef
  }, props.children);
}

var _default = FadeInSection;
exports.default = _default;