"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _map2 = _interopRequireDefault(require("ramda/src/map"));

var React = _interopRequireWildcard(require("react"));

var _CountryFlag = _interopRequireDefault(require("@kiwicom/orbit-components/lib/CountryFlag"));

var _NativeGroupedSelect = _interopRequireDefault(require("../NativeGroupedSelect"));

var mapLanguages = (0, _map2.default)(function (language) {
  return {
    value: language.id,
    text: language.name
  };
});

var NativePicker = function NativePicker(_ref) {
  var current = _ref.current,
      languages = _ref.languages,
      favorite = _ref.favorite,
      hideNativeText = _ref.hideNativeText,
      onChange = _ref.onChange;
  return React.createElement(_NativeGroupedSelect.default, {
    value: current.id,
    groups: favorite ? [{
      key: "current",
      items: [{
        value: current.id,
        text: current.name
      }]
    }, {
      key: "favorite",
      items: mapLanguages(favorite)
    }, {
      key: "all",
      items: mapLanguages(languages)
    }] : [{
      key: "current",
      items: [{
        value: current.id,
        text: current.name
      }]
    }, {
      key: "all",
      items: mapLanguages(languages)
    }] // $FlowExpected: type too specific
    ,
    icon: React.createElement(_CountryFlag.default, {
      code: current.flag
    }),
    hideNativeText: hideNativeText,
    onChange: onChange
  });
};

var _default = NativePicker;
exports.default = _default;