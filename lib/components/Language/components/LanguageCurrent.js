"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _CountryFlag = _interopRequireDefault(require("@kiwicom/orbit-components/lib/CountryFlag"));

var _LanguageNameText = _interopRequireDefault(require("./LanguageNameText"));

var Container = _styledComponents.default.div.withConfig({
  displayName: "LanguageCurrent__Container",
  componentId: "sc-1qu37au-0"
})(["display:flex;align-items:center;"]);

var LanguageCurrent = function LanguageCurrent(_ref) {
  var language = _ref.language,
      inverted = _ref.inverted;
  return React.createElement(Container, null, React.createElement(_CountryFlag.default, {
    code: language.flag,
    name: language.displayName
  }), React.createElement(_LanguageNameText.default, {
    inverted: inverted
  }, language.displayName));
};

var _default = LanguageCurrent;
exports.default = _default;