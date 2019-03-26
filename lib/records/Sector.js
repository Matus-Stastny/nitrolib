"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sector = void 0;

var _normalizr = require("normalizr");

var _Segment = require("./Segment");

// eslint-disable-next-line import/prefer-default-export
var sector = new _normalizr.schema.Entity("sector", {
  segments: [_Segment.segment],
  carriers: [_Segment.carrier]
});
exports.sector = sector;