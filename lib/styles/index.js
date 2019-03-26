"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.language = exports.logo = exports.navbar = exports.padding = exports.border = void 0;
var border = {
  size: 1,
  radius: 3
};
exports.border = border;
var padding = {
  base: 5,
  page: 10
};
exports.padding = padding;
var navbar = {
  size: 64,
  height: 50
};
exports.navbar = navbar;
var logo = {
  width: 80,
  height: 50
};
exports.logo = logo;
var language = {
  // used for decide, when to render 2/3 columns
  // and when to activate customHeight on Popup
  limit: 5,
  row: {
    height: 31,
    width: 180
  }
};
exports.language = language;