"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _map2 = _interopRequireDefault(require("ramda/src/map"));

var cookies = _interopRequireWildcard(require("../../../services/session/cookies"));

var storage = _interopRequireWildcard(require("../../../services/session/storage"));

var _cookies2 = require("../../../consts/cookies");

var _storage2 = require("../../../consts/storage");

var handleAffiliateId = function handleAffiliateId(fromUrl, rest) {
  var params = (0, _map2.default)(String, rest); // URL 1st

  if (fromUrl) {
    cookies.save(_cookies2.AFFILIATE_ID, fromUrl, {
      expires: 30
    }); // FIXME maybe also to storage

    storage.save(_storage2.AFFILIATE_PARAMS, JSON.stringify(params));
    return {
      id: fromUrl,
      params: params
    };
  } // Cookies / localStorage 2nd


  var fromCookies = cookies.load(_cookies2.AFFILIATE_ID);

  if (fromCookies) {
    var loadedParams = storage.load(_storage2.AFFILIATE_PARAMS);
    return {
      id: fromCookies,
      params: loadedParams ? JSON.parse(loadedParams) : {}
    };
  }

  cookies.remove(_cookies2.AFFILIATE_ID);
  storage.remove(_storage2.AFFILIATE_PARAMS);
  return null;
};

var _default = handleAffiliateId;
exports.default = _default;