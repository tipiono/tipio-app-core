"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScrollPosition = getScrollPosition;
exports.useScrollPosition = useScrollPosition;

var _react = require("react");

function getScrollPosition(_ref) {
  var element = _ref.element,
      useWindow = _ref.useWindow;
  var target = element ? element.current : document.body;
  var position = target.getBoundingClientRect();
  return useWindow ? {
    x: window.scrollX,
    y: window.scrollY
  } : {
    x: position.left,
    y: position.top
  };
}

function useScrollPosition(effect, deps, element, useWindow, wait) {
  var position = (0, _react.useRef)(getScrollPosition({
    useWindow: useWindow
  }));
  var throttleTimeout = null;

  var callBack = function callBack() {
    var currPos = getScrollPosition({
      element: element,
      useWindow: useWindow
    });
    effect({
      prevPos: position.current,
      currPos: currPos
    });
    position.current = currPos;
    throttleTimeout = null;
  };

  (0, _react.useEffect)(function () {
    var handleScroll = function handleScroll() {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, deps);
}