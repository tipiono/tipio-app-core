"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadFbSDK = loadFbSDK;
exports.shareOnMessengerWeb = shareOnMessengerWeb;
exports.messengerShareUrlMobile = messengerShareUrlMobile;

var _reactDeviceDetect = require("react-device-detect");

var appId = process.env.REACT_APP_FB_APP_ID;
alert("appId", appId);

function loadFbSDK() {
  window.fbAsyncInit = function () {
    window.FB.init({
      appId: appId,
      cookie: true,
      // enable cookies to allow the server to access
      // the session
      xfbml: true,
      // parse social plugins on this page
      version: 'v2.5' // use version 2.1

    });
  };

  (function (d, s, id) {
    var js,
        fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');
}

function shareOnMessengerWeb(link) {
  if (!_reactDeviceDetect.isMobile) {
    window.FB.ui({
      method: 'send',
      link: link
    });
  }
}

function messengerShareUrlMobile(link) {
  return "fb-messenger://share/?link=".concat(encodeURIComponent(link), "&app_id=").concat(appId);
}