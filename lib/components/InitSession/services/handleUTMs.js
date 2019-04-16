"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _forEachObjIndexed2 = _interopRequireDefault(require("ramda/src/forEachObjIndexed"));

var _prop2 = _interopRequireDefault(require("ramda/src/prop"));

var _map2 = _interopRequireDefault(require("ramda/src/map"));

var _mapObjIndexed2 = _interopRequireDefault(require("ramda/src/mapObjIndexed"));

var _filter2 = _interopRequireDefault(require("ramda/src/filter"));

var _compose2 = _interopRequireDefault(require("ramda/src/compose"));

var _isBefore = _interopRequireDefault(require("date-fns/isBefore"));

var _subMonths = _interopRequireDefault(require("date-fns/subMonths"));

var storage = _interopRequireWildcard(require("../../../services/session/storage"));

var UTMs = {
  utm_source: "",
  utm_medium: "",
  utm_term: "",
  utm_content: "",
  utm_campaign: "",
  mkt_route: "",
  mkt_postback: "",
  mkt_origin: "",
  mkt_form: "",
  mkt_agency: ""
};

var loadURL = function loadURL(query) {
  return (0, _compose2.default)((0, _filter2.default)(Boolean), (0, _mapObjIndexed2.default)(function (_, key) {
    return query[key];
  }))(UTMs);
};

var loadStorage = function loadStorage() {
  return (0, _compose2.default)((0, _map2.default)((0, _compose2.default)((0, _prop2.default)("value"), JSON.parse)), (0, _filter2.default)(Boolean), (0, _mapObjIndexed2.default)(function (_, key) {
    return storage.load(key) || "";
  }) // || "" due to Flow
  )(UTMs);
};

var clearStorage = function clearStorage() {
  return (0, _compose2.default)((0, _forEachObjIndexed2.default)(function (item, key) {
    if ((0, _isBefore.default)(new Date(item.createdAt), (0, _subMonths.default)(new Date(), 1))) {
      storage.remove(key);
    }
  }), (0, _map2.default)(JSON.parse), (0, _filter2.default)(Boolean), (0, _mapObjIndexed2.default)(function (_, key) {
    return storage.load(key) || "";
  }) // || "" due to Flow
  )(UTMs);
};

var saveStorage = function saveStorage(utms) {
  return (0, _compose2.default)((0, _forEachObjIndexed2.default)(function (val, key) {
    storage.save(key, JSON.stringify(val));
  }), (0, _map2.default)(function (value) {
    return {
      value: value,
      createdAt: new Date()
    };
  }))(utms);
};

var handleUTMs = function handleUTMs(query) {
  clearStorage(); // Removes outdated UTMs

  var strings = (0, _map2.default)(String, query);
  var fromURL = loadURL(strings);
  var fromStorage = loadStorage();
  saveStorage(fromURL); // Saves fresh UTMs

  return (0, _objectSpread2.default)({}, fromURL, fromStorage);
};

var _default = handleUTMs;
exports.default = _default;