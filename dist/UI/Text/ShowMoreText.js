"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _formatText2 = _interopRequireDefault(require("../../Util/formatText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ShowMoreText(_ref) {
  var text = _ref.text;

  var _formatText = (0, _formatText2.default)(text, function (item, key) {
    return _react.default.createElement("li", {
      key: key
    }, item);
  }, _react.default.createElement("br", null)),
      textFormatted = _formatText.textFormatted,
      restFormatted = _formatText.restFormatted;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showMore = _useState2[0],
      setShowMore = _useState2[1];

  return _react.default.createElement("div", {
    className: "tipio-description d-none d-lg-block"
  }, _react.default.createElement("div", {
    className: "tipio-content"
  }, _react.default.createElement("ul", null, textFormatted)), restFormatted && showMore && _react.default.createElement("div", {
    className: "tipio-show-more"
  }, _react.default.createElement("div", {
    title: "Les mer",
    titleOnShow: "Read less"
  }, _react.default.createElement("ul", null, restFormatted))), restFormatted && _react.default.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      setShowMore(!showMore);
    }
  }, " ", showMore ? 'Show less' : 'Show more', " "));
}

var _default = ShowMoreText;
exports.default = _default;