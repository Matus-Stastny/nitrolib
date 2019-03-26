"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _values2 = _interopRequireDefault(require("ramda/src/values"));

var _sort2 = _interopRequireDefault(require("ramda/src/sort"));

var _has2 = _interopRequireDefault(require("ramda/src/has"));

var React = _interopRequireWildcard(require("react"));

var intlContext = _interopRequireWildcard(require("../../services/intl/context"));

var fetchedContext = _interopRequireWildcard(require("../../services/fetched/context"));

var _NativePicker = _interopRequireDefault(require("./NativePicker"));

var _CustomPicker = _interopRequireDefault(require("../CustomPicker"));

var _LanguageCurrent = _interopRequireDefault(require("./components/LanguageCurrent"));

var _Menu = _interopRequireDefault(require("./components/Menu"));

var Language = function Language(_ref) {
  var onChange = _ref.onChange,
      hideNativeText = _ref.hideNativeText,
      native = _ref.native,
      flat = _ref.flat,
      inverted = _ref.inverted,
      positionMenuDesktop = _ref.positionMenuDesktop,
      positionMenuTablet = _ref.positionMenuTablet,
      favorite = _ref.favorite,
      onSetModal = _ref.onSetModal;
  return React.createElement(fetchedContext.Consumer, null, function (fetched) {
    return React.createElement(intlContext.Consumer, null, function (intl) {
      var current = intl.language;
      var languageMap = fetched.brandLanguage.languages;

      if (!(0, _has2.default)(current.id, languageMap)) {
        return null;
      } // TODO no sorting in components! add to 'fetched' or whatever
      // eslint-disable-next-line fp/no-mutating-methods


      var languages = (0, _sort2.default)(function (a, b) {
        return a.name.localeCompare(b.name);
      }, (0, _values2.default)(languageMap));
      return native ? React.createElement(_NativePicker.default, {
        current: current,
        languages: languages,
        favorite: favorite,
        hideNativeText: hideNativeText,
        onChange: onChange
      }) : React.createElement(_CustomPicker.default, {
        openButton: React.createElement(_LanguageCurrent.default, {
          language: current,
          inverted: inverted
        }),
        onChange: onChange
      }, function (render) {
        return React.createElement(_Menu.default, {
          currentId: intl.language.id,
          onChange: render.onChange,
          languages: languages,
          continents: fetched.brandLanguage.continents,
          positionMenuDesktop: positionMenuDesktop || 0,
          positionMenuTablet: positionMenuTablet || 0,
          flat: flat,
          onSetModal: onSetModal
        });
      });
    });
  });
};

Language.defaultProps = {
  native: false,
  flat: false
};
var _default = Language;
exports.default = _default;