"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getLink;

function getLink(language) {
  return "/".concat(language.id, "/searchDeep?pageName=search");
}