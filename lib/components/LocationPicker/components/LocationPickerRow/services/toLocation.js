"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var locationAreaDefault = {
  locationId: "",
  name: "",
  slug: "",
  code: ""
};

function toLocationArea(input) {
  return {
    id: input.locationId || "",
    name: input.name || "",
    slug: input.slug || "",
    code: input.code || ""
  };
}

function toLocation(input) {
  var _input$location, _input$location2;

  var common = {
    id: input.locationId || "",
    name: input.name || "",
    code: input.code || "",
    slug: input.slug || "",
    location: {
      lat: ((_input$location = input.location) === null || _input$location === void 0 ? void 0 : _input$location.lat) || 0,
      lng: ((_input$location2 = input.location) === null || _input$location2 === void 0 ? void 0 : _input$location2.lng) || 0
    }
  };

  if (input.type === "airport") {
    return (0, _objectSpread2.default)({}, common, {
      type: "airport",
      city: toLocationArea(input.city || locationAreaDefault),
      country: toLocationArea(input.country || locationAreaDefault)
    });
  }

  if (input.type === "city") {
    return (0, _objectSpread2.default)({}, common, {
      type: "city",
      country: toLocationArea(input.country || locationAreaDefault),
      subdivision: toLocationArea(input.subdivision || locationAreaDefault)
    });
  }

  if (input.type === "subdivision") {
    return (0, _objectSpread2.default)({}, common, {
      type: "subdivision",
      country: toLocationArea(input.country || locationAreaDefault)
    });
  } // country


  return (0, _objectSpread2.default)({}, common, {
    type: "country"
  });
}

var _default = toLocation;
exports.default = _default;