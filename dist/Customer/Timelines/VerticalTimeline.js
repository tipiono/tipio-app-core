"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCountdownNow = _interopRequireWildcard(require("react-countdown-now"));

var _SecondaryOutlineButton = _interopRequireDefault(require("../../UI/Buttons/SecondaryOutlineButton"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _renderer = function renderer(_ref) {
  var hours = _ref.hours,
      minutes = _ref.minutes,
      seconds = _ref.seconds,
      completed = _ref.completed;
  return _react.default.createElement("span", {
    className: "pinky-countdown-sm-time"
  }, hours, ":", minutes, ":", seconds);
};

var VerticalTimeline = function VerticalTimeline(_ref2) {
  var isLoading = _ref2.isLoading,
      tipio = _ref2.tipio,
      stepStatus = _ref2.stepStatus,
      onClose = _ref2.onClose;
  console.log("hej stepStatus", stepStatus);
  return _react.default.createElement("div", {
    className: "container"
  }, isLoading && _react.default.createElement("p", null, "Loading..."), !isLoading && _react.default.createElement("div", {
    className: "row"
  }, _react.default.createElement("div", {
    className: "col-md-6 mx-auto"
  }, _react.default.createElement("div", {
    className: "tipio-status"
  }, _react.default.createElement("div", {
    className: "tipio-status-header"
  }, _react.default.createElement("a", {
    className: "tipio-status-header-image",
    href: "/"
  }, _react.default.createElement("img", {
    src: tipio.images && tipio.images[0].blob_url,
    alt: ""
  })), _react.default.createElement("div", null, _react.default.createElement("h5", {
    className: "tipio-status-header-title"
  }, _react.default.createElement("a", {
    href: "/"
  }, tipio.title)), _react.default.createElement("p", {
    className: "tipio-status-header-subtitle"
  }, tipio.subheading))), _react.default.createElement("div", {
    className: "tipio-status-body"
  }, _react.default.createElement("ul", {
    className: "vertical-timeline"
  }, _react.default.createElement("li", {
    className: "vertical-timeline-item completed step-1"
  }, _react.default.createElement("span", {
    className: "timeline-item-title"
  }, "Kj\xF8pt")), _react.default.createElement("li", {
    className: "vertical-timeline-item step-2 " + stepStatus[2]
  }, !(stepStatus[2] === "completed") && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "timeline-tooltip"
  }, _react.default.createElement("div", {
    className: "timeline-tooltip-inner"
  }, _react.default.createElement("span", {
    className: "left-text"
  }, tipio.meta.binding_count, " har kj\xF8pt!"), _react.default.createElement("div", {
    className: "tooltip-divider"
  }), _react.default.createElement("svg", {
    className: "white-countdown-sm-icon",
    width: 11,
    height: 12
  }, _react.default.createElement("path", {
    fill: "#FFF",
    d: "M2.389 10.076C.15 8.459-.535 5.386.799 2.945a.155.155 0 01-.04-.046L.443 2.5A1.458 1.458 0 01.69.44a1.487 1.487 0 012.077.265l.107.138a5.29 5.29 0 015.25 0l.107-.138A1.487 1.487 0 0110.31.439a1.459 1.459 0 01.255 2.062l-.318.398a.155.155 0 01-.04.046c1.333 2.443.646 5.516-1.595 7.13l1.064 1.083c.11.112.11.292 0 .404a.276.276 0 01-.396 0L8.148 10.41a5.302 5.302 0 01-5.216 0L1.8 11.562a.276.276 0 01-.396 0 .289.289 0 010-.404l.985-1.082zm7.495-7.644l.232-.294a.887.887 0 00-.153-1.25.933.933 0 00-1.29.156l-.062.092c.494.355.925.793 1.273 1.296zm-8.768 0a5.327 5.327 0 011.273-1.296l-.063-.086a.933.933 0 00-1.29-.156.887.887 0 00-.153 1.25l.233.288zM5.5 10.496c2.656 0 4.809-2.192 4.809-4.896C10.309 2.896 8.156.704 5.5.704S.691 2.896.691 5.6c.004 2.703 2.155 4.893 4.809 4.896zM4.007 4.16l1.516 1.601L8.13 3.094a.276.276 0 01.396 0 .29.29 0 010 .404l-2.829 2.88a.28.28 0 01-.407 0L3.594 4.54a.29.29 0 010-.409.274.274 0 01.413.029z"
  })), " ", _react.default.createElement(_reactCountdownNow.default, {
    date: tipio.meta.binding_expires_in,
    renderer: function renderer(_ref3) {
      var completed = _ref3.completed;
      var result = (0, _reactCountdownNow.formatTimeDelta)((0, _reactCountdownNow.calcTimeDelta)(tipio.meta.binding_expires_in), {
        daysInHours: true
      });
      return _renderer(_objectSpread({}, result, {
        completed: completed
      }));
    }
  }))), _react.default.createElement("div", {
    className: "timeline-item-content"
  }, _react.default.createElement("h6", {
    className: "content-title"
  }, "P\xE5melding p\xE5g\xE5r"), _react.default.createElement("p", {
    className: "content-description"
  }, "Jo flere som er med jo bedre pris. \u2028"), _react.default.createElement("button", {
    className: "btn btn-secondary btn-sm"
  }, "Husk \xE5 del Tipioen!"))), stepStatus[2] === "completed" && _react.default.createElement("span", {
    className: "timeline-item-title"
  }, tipio.meta.binding_count, " kj\xF8pte!")), _react.default.createElement("li", {
    className: "vertical-timeline-item step-3 " + (stepStatus[3] !== "failed" ? stepStatus[3] : "ongoing")
  }, (stepStatus[3] === "coming" || stepStatus[3] === "completed") && _react.default.createElement("span", {
    className: "timeline-item-title"
  }, "Budgiving"), stepStatus[3] === "ongoing" && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "timeline-tooltip"
  }, _react.default.createElement("div", {
    className: "timeline-tooltip-inner"
  }, tipio.meta.bidCount === 0 && _react.default.createElement("span", {
    className: "left-text"
  }, "Venter p\xE5 bud"), tipio.meta.bidCount > 0 && _react.default.createElement("span", {
    className: "left-text"
  }, tipio.meta.bidCount, " bud mottat"), _react.default.createElement("div", {
    className: "tooltip-divider"
  }), tipio.meta.binding_expires_in)), _react.default.createElement("div", {
    className: "timeline-item-content"
  }, _react.default.createElement("h6", {
    className: "content-title"
  }, "Budgiving p\xE5g\xE5r"), _react.default.createElement("p", {
    className: "content-description"
  }, "Vi sender deg en mail s\xE5 fort vi har mottat et bud fra en leverand\xF8r."))), stepStatus[3] === "failed" && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "timeline-tooltip "
  }, _react.default.createElement("div", {
    className: "timeline-tooltip-inner bg-dark"
  }, _react.default.createElement("span", {
    className: "left-text"
  }, "Fikk ingen bud"), _react.default.createElement("div", {
    className: "tooltip-divider"
  }), _react.default.createElement("span", {
    className: "right-text"
  }, _react.default.createElement("img", {
    className: "mr-1",
    alt: ""
  }), "Avsluttet"))), _react.default.createElement("div", {
    className: "timeline-item-content"
  }, _react.default.createElement("h6", {
    className: "content-title"
  }, "Budrunden er avsluttet"), _react.default.createElement("p", {
    className: "content-description"
  }, "Det kom dessverre ingen bud fra leverand\xF8rene.", " ")))), stepStatus[3] !== "failed" && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("li", {
    className: "vertical-timeline-item step-4 " + stepStatus[4]
  }, (stepStatus[4] === "coming" || stepStatus[4] === "completed") && _react.default.createElement("span", {
    className: "timeline-item-title"
  }, "Bekreftelse p\xE5 kj\xF8p"), stepStatus[4] === "ongoing" && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "timeline-tooltip"
  }, _react.default.createElement("div", {
    className: "timeline-tooltip-inner"
  }, _react.default.createElement("span", {
    className: "left-text"
  }, tipio.meta.tipio_offer_price, " Kr"))), _react.default.createElement("div", {
    className: "timeline-item-content"
  }, _react.default.createElement("h6", {
    className: "content-title"
  }, "Gratulerer!"), _react.default.createElement("p", {
    className: "content-description"
  }, "Endelig pris ble ", tipio.meta.tipio_offer_price, " ", "kr.")))), _react.default.createElement("li", {
    className: "vertical-timeline-item step-5 " + stepStatus[5]
  }, (stepStatus[5] === "coming" || stepStatus[5] === "completed") && _react.default.createElement("span", {
    className: "timeline-item-title"
  }, "Levering"), stepStatus[5] === "ongoing" && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "timeline-tooltip"
  }, _react.default.createElement("div", {
    className: "timeline-tooltip-inner"
  }, _react.default.createElement("span", {
    className: "left-text"
  }, "Levering"), _react.default.createElement("div", {
    className: "tooltip-divider"
  }), _react.default.createElement("span", {
    className: "left-text"
  }, tipio.meta.tipo_offer_company_name))), _react.default.createElement("div", {
    className: "timeline-item-content"
  }, _react.default.createElement("h6", {
    className: "content-title"
  }, "Levering"), _react.default.createElement("p", {
    className: "content-description"
  }, "Bohus leverer varen til deg! Ta kontakt med leverand\xF8r for sp\xF8rsm\xE5l."))))))), _react.default.createElement("div", {
    className: "tipio-status-footer"
  }, _react.default.createElement(_SecondaryOutlineButton.default, {
    text: "G\xE5 til produkt",
    onClick: onClose
  }))))));
};

VerticalTimeline.propTypes = {
  isLoading: _propTypes.default.bool.isRequired,
  tipio: _propTypes.default.arrayOf(_propTypes.default.shape({
    mainImageUrl: _propTypes.default.string.isRequired,
    title: _propTypes.default.string.isRequired,
    subheading: _propTypes.default.string.isRequired
  })).isRequired,
  stepStatus: _propTypes.default.object.isRequired,
  onClose: _propTypes.default.func.isRequired // meta: {
  //   joinedCount: PropTypes.number.isRequired,
  //   bidCount: PropTypes.number.isRequired,
  //   bidExpiresIn: PropTypes.object.isRequired,
  //   tipioOfferPrice: PropTypes.number.isRequired,
  //   tipioOfferCompanyName:  PropTypes.string.isRequired,
  // }
  // ,

};
var _default = VerticalTimeline;
exports.default = _default;