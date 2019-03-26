"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLanguageWrapperWidth = exports.getLanguageWrapperHeight = void 0;

var _styles = require("../../../styles");

var getWidthConstant = function getWidthConstant(filteredLanguages) {
  return filteredLanguages.length < _styles.language.limit ? 2 : 3;
}; // 2 || 3 columns


var getLanguageWrapperHeight = function getLanguageWrapperHeight(filteredLanguages, flat) {
  var widthConstant = flat ? 1 : getWidthConstant(filteredLanguages); // For filtered cases - enables to wrap to (2 || 3) cols every time

  var heightConstraint = Math.ceil(filteredLanguages.length / widthConstant) * _styles.language.row.height; // custom height depends on number of columns


  return filteredLanguages.length <= _styles.language.limit // && this.props.isMobile
  ? filteredLanguages.length * _styles.language.row.height // custom height depends on number of languages, only on mobile && when less languages than limit
  : heightConstraint;
};

exports.getLanguageWrapperHeight = getLanguageWrapperHeight;

var getLanguageWrapperWidth = function getLanguageWrapperWidth(filteredLanguages, flat) {
  return (flat ? 1 : getWidthConstant(filteredLanguages)) * _styles.language.row.width;
};

exports.getLanguageWrapperWidth = getLanguageWrapperWidth;