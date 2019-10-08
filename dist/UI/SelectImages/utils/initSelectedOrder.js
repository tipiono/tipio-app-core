"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initSelectedOrder;

function initSelectedOrder(imgs) {
  if (imgs) {
    var images = imgs.map(function (item, index) {
      return {
        id: index,
        src: item
      };
    });
    return images.reduce(function (map, obj) {
      map[obj.id] = 0;
      return map;
    }, {});
  }
}