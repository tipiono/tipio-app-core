"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.img = exports.thumbInner = exports.thumb = exports.thumbsContainer = void 0;
var thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};
exports.thumbsContainer = thumbsContainer;
var thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};
exports.thumb = thumb;
var thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};
exports.thumbInner = thumbInner;
var img = {
  width: '100%',
  height: '100%'
};
exports.img = img;