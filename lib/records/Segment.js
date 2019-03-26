"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.segment = exports.carrier = void 0;

var _normalizr = require("normalizr");

var carrier = new _normalizr.schema.Entity("carrier");
exports.carrier = carrier;
var segment = new _normalizr.schema.Entity("segment", {
  carrier: carrier,
  operatingCarrier: carrier
});
exports.segment = segment;