"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var cookies = _interopRequireWildcard(require("../../../services/session/cookies"));

var _cookies2 = require("../../../consts/cookies");

var _ids = require("../../../services/session/ids");

var handleUserId = function handleUserId(fromUrl) {
  // URL 1st
  if (fromUrl) {
    cookies.save(_cookies2.USER_ID, fromUrl);
    return fromUrl;
  } // Cookies 2nd


  var fromCookies = cookies.load(_cookies2.USER_ID);

  if (fromCookies) {
    return fromCookies;
  }

  var uid = (0, _ids.makeUserId)();
  cookies.save(_cookies2.USER_ID, uid);
  return uid;
};

var _default = handleUserId;
exports.default = _default;