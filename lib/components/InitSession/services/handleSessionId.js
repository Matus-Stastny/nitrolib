"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var storage = _interopRequireWildcard(require("../../../services/session/storage"));

var _ids = require("../../../services/session/ids");

var _storage2 = require("../../../consts/storage");

var handleSessionId = function handleSessionId() {
  // Storage 1nd
  var fromStorage = storage.loadSession(_storage2.SESSION_ID);

  if (fromStorage) {
    return fromStorage;
  }

  var sid = (0, _ids.makeSessionId)();
  storage.saveSession(_storage2.SESSION_ID, sid);
  return sid;
};

var _default = handleSessionId;
exports.default = _default;