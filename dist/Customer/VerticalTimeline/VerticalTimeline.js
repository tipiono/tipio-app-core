"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VerticalTimeline = function VerticalTimeline(_ref) {
  var isLoading = _ref.isLoading,
      tipio = _ref.tipio,
      stepStatus = _ref.stepStatus,
      onClose = _ref.onClose;
  console.log('hej stepStatus', stepStatus);
  return _react.default.createElement("div", {
    className: "container"
  }, isLoading && _react.default.createElement("p", null, "Loading..."), !isLoading && _react.default.createElement("div", {
    className: "row"
  }, _react.default.createElement("div", {
    className: "col-md-5 mx-auto"
  }, _react.default.createElement("div", {
    className: "tipio-status"
  }, _react.default.createElement("div", {
    className: "tipio-status-header"
  }, _react.default.createElement("a", {
    href: "/"
  }, _react.default.createElement("img", {
    src: tipio.mainImageUrl,
    alt: "",
    className: "img-fluid"
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
  }, !(stepStatus[2] === 'completed') && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "timeline-tooltip"
  }, _react.default.createElement("div", {
    className: "timeline-tooltip-inner"
  }, _react.default.createElement("span", {
    className: "left-text"
  }, tipio.meta.joinedCount, " har kj\xF8pt!"), _react.default.createElement("div", {
    className: "tooltip-divider"
  }), tipio.expires_in)), _react.default.createElement("div", {
    className: "timeline-item-content"
  }, _react.default.createElement("h6", {
    className: "content-title"
  }, "P\xE5melding p\xE5g\xE5r"), _react.default.createElement("p", {
    className: "content-description"
  }, "Jo flere som er med jo bedre pris. \u2028"), _react.default.createElement("button", {
    className: "btn btn-secondary btn-sm"
  }, "Husk \xE5 del Tipioen!"))), stepStatus[2] === 'completed' && _react.default.createElement("span", {
    className: "timeline-item-title"
  }, tipio.meta.joinedCount, " kj\xF8pte!")), _react.default.createElement("li", {
    className: "vertical-timeline-item step-3 " + (stepStatus[3] !== 'failed' ? stepStatus[3] : 'ongoing')
  }, (stepStatus[3] === 'coming' || stepStatus[3] === 'completed') && _react.default.createElement("span", {
    className: "timeline-item-title"
  }, "Budgiving"), stepStatus[3] === 'ongoing' && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "timeline-tooltip"
  }, _react.default.createElement("div", {
    className: "timeline-tooltip-inner"
  }, tipio.meta.bidCount === 0 && _react.default.createElement("span", {
    className: "left-text"
  }, "Venter p\xE5 bud"), tipio.meta.bidCount > 0 && _react.default.createElement("span", {
    className: "left-text"
  }, tipio.meta.bidCount, " bud mottat"), _react.default.createElement("div", {
    className: "tooltip-divider"
  }), tipio.meta.bidExpiresIn)), _react.default.createElement("div", {
    className: "timeline-item-content"
  }, _react.default.createElement("h6", {
    className: "content-title"
  }, "Budgiving p\xE5g\xE5r"), _react.default.createElement("p", {
    className: "content-description"
  }, "Vi sender deg en mail s\xE5 fort vi har mottat et bud fra en leverand\xF8r."))), stepStatus[3] === 'failed' && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
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
  }, "Det kom dessverre ingen bud fra leverand\xF8rene. ")))), stepStatus[3] !== 'failed' && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("li", {
    className: "vertical-timeline-item step-4 " + stepStatus[4]
  }, (stepStatus[4] === 'coming' || stepStatus[4] === 'completed') && _react.default.createElement("span", {
    className: "timeline-item-title"
  }, "Bekreftelse p\xE5 kj\xF8p"), stepStatus[4] === 'ongoing' && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "timeline-tooltip"
  }, _react.default.createElement("div", {
    className: "timeline-tooltip-inner"
  }, _react.default.createElement("span", {
    className: "left-text"
  }, tipio.meta.tipioOfferPrice, " Kr"))), _react.default.createElement("div", {
    className: "timeline-item-content"
  }, _react.default.createElement("h6", {
    className: "content-title"
  }, "Gratulerer!"), _react.default.createElement("p", {
    className: "content-description"
  }, "Endelig pris ble ", tipio.meta.tipio_offer_price, " kr.")))), _react.default.createElement("li", {
    className: "vertical-timeline-item step-5 " + stepStatus[5]
  }, (stepStatus[5] === 'coming' || stepStatus[5] === 'completed') && _react.default.createElement("span", {
    className: "timeline-item-title"
  }, "Levering"), stepStatus[5] === 'ongoing' && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "timeline-tooltip"
  }, _react.default.createElement("div", {
    className: "timeline-tooltip-inner"
  }, _react.default.createElement("span", {
    className: "left-text"
  }, "Levering"), _react.default.createElement("div", {
    className: "tooltip-divider"
  }), _react.default.createElement("span", {
    className: "left-text"
  }, tipio.meta.tipioOfferCompanyName))), _react.default.createElement("div", {
    className: "timeline-item-content"
  }, _react.default.createElement("h6", {
    className: "content-title"
  }, "Levering"), _react.default.createElement("p", {
    className: "content-description"
  }, "Bohus leverer varen til deg! Ta kontakt med leverand\xF8r for sp\xF8rsm\xE5l."))))))), _react.default.createElement("div", {
    className: "tipio-status-footer"
  }, _react.default.createElement("button", {
    type: "button",
    className: "btn btn-outline-secondary btn-lg btn-block",
    onClick: onClose
  }, "G\xE5 til produkt"))))));
};

VerticalTimeline.propTypes = {
  isLoading: _propTypes.default.bool.isRequired,
  tipio: _propTypes.default.arrayOf(_propTypes.default.shape({
    mainImageUrl: _propTypes.default.string.isRequired,
    title: _propTypes.default.string.isRequired,
    subheading: _propTypes.default.string.isRequired
  })).isRequired,
  meta: {
    joinedCount: _propTypes.default.number.isRequired,
    bidCount: _propTypes.default.number.isRequired,
    bidExpiresIn: _propTypes.default.object.isRequired,
    tipioOfferPrice: _propTypes.default.number.isRequired,
    tipioOfferCompanyName: _propTypes.default.string.isRequired
  },
  stepStatus: _propTypes.default.object.isRequired,
  onClose: _propTypes.default.func.isRequired
};
var _default = VerticalTimeline;
exports.default = _default;