"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MODAL_OPEN = exports.API_REQUEST_FAILED = exports.API_SUCCESS = exports.API_REQUEST = exports.API_ERROR = void 0;
var API_ERROR = {
  category: "Nitro",
  subCategory: "API",
  action: "Error",
  destinations: {
    exponea: false,
    ga: false,
    logmole: true
  }
};
exports.API_ERROR = API_ERROR;
var API_REQUEST = {
  category: "Nitro",
  subCategory: "API",
  action: "Request",
  destinations: {
    exponea: false,
    ga: false,
    logmole: true
  }
};
exports.API_REQUEST = API_REQUEST;
var API_SUCCESS = {
  category: "Nitro",
  subCategory: "API",
  action: "Success",
  destinations: {
    exponea: false,
    ga: false,
    logmole: true
  }
};
exports.API_SUCCESS = API_SUCCESS;
var API_REQUEST_FAILED = {
  category: "Nitro",
  subCategory: "API",
  action: "Failed",
  destinations: {
    exponea: false,
    ga: false,
    logmole: true
  }
};
exports.API_REQUEST_FAILED = API_REQUEST_FAILED;
var MODAL_OPEN = {
  category: "Nitro",
  subCategory: "Modal",
  action: "Open",
  destinations: {
    exponea: false,
    ga: false,
    logmole: true
  }
};
exports.MODAL_OPEN = MODAL_OPEN;