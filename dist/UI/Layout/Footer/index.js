"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _FooterContent = _interopRequireDefault(require("./FooterContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react.default.createElement("footer", {
    className: "customFooter"
  }, _react.default.createElement("div", {
    className: "container"
  }, _react.default.createElement("div", {
    className: "row"
  }, _react.default.createElement("div", {
    className: "col-sm-12 col-md-11 mx-auto"
  }, _react.default.createElement("div", {
    className: "row"
  }, _react.default.createElement(_FooterContent.default, {
    title: 'Kontakt oss',
    data: [{
      label: 'Bryggegata 3, 0250 Oslo',
      anchorProps: {
        href: 'https://goo.gl/maps/YYYf61pKq3uoiz929',
        target: '_blank'
      }
    }, {
      label: 'Org. nr. 920 691 951',
      anchorProps: {
        href: 'https://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=920691951'
      }
    }, {
      label: 'post@tipio.no',
      anchorProps: {
        href: 'mailto:post@tipio.no'
      }
    }]
  }), _react.default.createElement(_FooterContent.default, {
    title: 'Følg Tipio',
    data: [{
      label: 'Facebook',
      anchorProps: {
        href: 'https://www.facebook.com/Tipio-667205140149721'
      }
    }, {
      label: 'Instagram',
      anchorProps: {
        href: 'https://www.instagram.com/tipio.no'
      }
    }, {
      label: 'Linkedin',
      anchorProps: {
        href: 'https://www.linkedin.com/company/tipio/?viewAsMember=true'
      }
    }]
  }), _react.default.createElement("div", {
    className: "col-sm-12 col-md-6"
  }, _react.default.createElement("p", {
    className: "customFooter__description"
  }, "Hvorfor kj\xF8pe dyrt alene n\xE5r vi kan handle billig sammen?", _react.default.createElement("br", null), _react.default.createElement("span", null), "I Tipio kan du fortelle butikkene hva du \xF8nsker \xE5 f\xE5 en bedre pris p\xE5.")))))));
};

var _default = Footer;
exports.default = _default;