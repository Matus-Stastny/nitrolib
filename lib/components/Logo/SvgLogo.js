"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _mediaQuery = _interopRequireDefault(require("@kiwicom/orbit-components/lib/utils/mediaQuery"));

var _Theme = require("../../records/Theme");

var LtMiddleMobile = _styledComponents.default.div.withConfig({
  displayName: "SvgLogo__LtMiddleMobile",
  componentId: "sc-1yzt2ib-0"
})(["display:block;svg{display:block;}", ";"], _mediaQuery.default.mediumMobile((0, _styledComponents.css)(["display:none;"])));

var GtMiddleMobile = _styledComponents.default.div.withConfig({
  displayName: "SvgLogo__GtMiddleMobile",
  componentId: "sc-1yzt2ib-1"
})(["display:none;svg{display:block;}", ";"], _mediaQuery.default.mediumMobile((0, _styledComponents.css)(["display:block;"])));

var _ref2 =
/*#__PURE__*/
_react.default.createElement("defs", null);

var _ref3 =
/*#__PURE__*/
_react.default.createElement("defs", null);

var SvgLogo = function SvgLogo(_ref) {
  var height = _ref.height,
      width = _ref.width,
      title = _ref.title,
      inverted = _ref.inverted,
      theme = _ref.theme;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(GtMiddleMobile, null, _react.default.createElement("svg", {
    id: "svg3400",
    viewBox: "0 0 242.989 120",
    height: height,
    width: width
  }, _ref2, _react.default.createElement("title", null, title), _react.default.createElement("g", {
    id: "g3408"
  }, _react.default.createElement("path", {
    id: "path3410",
    fill: inverted ? theme.orbit.paletteWhite : theme.orbit.paletteProductNormal,
    d: "M138.136 56.611a4.8 4.8 0 1 0 4.8 4.8 4.8 4.8 0 0 0-4.8-4.8"
  }), _react.default.createElement("path", {
    id: "path3412",
    fill: inverted ? theme.orbit.paletteWhite : theme.orbit.paletteInkDark,
    d: "M104.988 49.748a3.631 3.631 0 0 0 .247-1.112 2.446 2.446 0 0 0-2.657-2.473 2.294 2.294 0 0 0-2.35 1.855l-5.437 16.624-6.242-16.749a2.458 2.458 0 0 0-4.7 0l-6.18 16.748-5.435-16.624a2.292 2.292 0 0 0-2.349-1.855 2.446 2.446 0 0 0-2.657 2.473 3.616 3.616 0 0 0 .247 1.112l7.6 22.557a2.242 2.242 0 0 0 2.411 1.669 2.454 2.454 0 0 0 2.472-1.731L86.2 55.124l6.3 17.119a2.441 2.441 0 0 0 2.473 1.731 2.317 2.317 0 0 0 2.414-1.674l7.6-22.557zm-56.67 19.068l-8.994-8.939 8.994-8.939a2.9 2.9 0 0 0-4.107-4.108L33.268 57.773a3.014 3.014 0 0 0 0 4.208l10.943 10.942a2.9 2.9 0 1 0 4.107-4.107M31.034 70.86v-22a2.9 2.9 0 0 0-5.809 0v22a2.9 2.9 0 0 0 5.809 0m24.588-21.792v22a2.905 2.905 0 1 0 5.81 0v-22a2.905 2.905 0 1 0-5.81 0m55.508 0v22a2.905 2.905 0 1 0 5.81 0v-22a2.905 2.905 0 1 0-5.81 0m0 0v22a2.905 2.905 0 1 0 5.81 0v-22a2.905 2.905 0 1 0-5.81 0m0 0v22a2.905 2.905 0 1 0 5.81 0v-22a2.905 2.905 0 1 0-5.81 0m0 0v22a2.905 2.905 0 1 0 5.81 0v-22a2.905 2.905 0 1 0-5.81 0"
  }), _react.default.createElement("path", {
    id: "path3414",
    fill: inverted ? theme.orbit.paletteWhite : theme.orbit.paletteProductNormal,
    d: "M131.168 85.525a4.321 4.321 0 0 0-2.582-.851 4.374 4.374 0 0 0-3.508 1.77 59.123 59.123 0 0 1-22.3 17.944 73.519 73.519 0 0 1-31.41 6.9c-16.886 0-32.722-5.43-44.591-15.292a51.79 51.79 0 0 1-13.272-16.314 42.81 42.81 0 0 1 0-39.364C18.179 31.14 25.971 23.3 36.04 17.659a72.306 72.306 0 0 1 35.346-8.947 73.485 73.485 0 0 1 31.456 6.933 59.049 59.049 0 0 1 22.316 18.02 4.375 4.375 0 0 0 3.515 1.78 4.355 4.355 0 0 0 3.507-6.933A67.848 67.848 0 0 0 106.59 7.78 82.283 82.283 0 0 0 71.386 0c-18.914 0-36.735 6.149-50.18 17.3A60.488 60.488 0 0 0 5.742 36.364a51.517 51.517 0 0 0 0 47.273c5.466 10.72 14.47 19.816 26.036 26.3A81.065 81.065 0 0 0 71.386 120a82.31 82.31 0 0 0 35.128-7.742 67.943 67.943 0 0 0 25.574-20.64 4.363 4.363 0 0 0-.919-6.093"
  }), _react.default.createElement("path", {
    id: "path3416",
    fill: inverted ? theme.orbit.paletteWhite : theme.orbit.paletteInkDark,
    d: "M170.112 51.312a8.414 8.414 0 0 1 5.574 2.1 3.009 3.009 0 0 0 1.734.594 2.44 2.44 0 0 0 2.475-2.514 2.517 2.517 0 0 0-.828-1.823 12.579 12.579 0 0 0-8.954-3.426c-8.015 0-13.612 5.677-13.612 13.807s5.6 13.808 13.612 13.808a12.554 12.554 0 0 0 8.939-3.413 2.54 2.54 0 0 0 .844-1.836 2.44 2.44 0 0 0-2.475-2.515 3.086 3.086 0 0 0-1.776.625 8.424 8.424 0 0 1-5.532 2.072c-4.8 0-8.154-3.594-8.154-8.74s3.353-8.739 8.154-8.739"
  }), _react.default.createElement("path", {
    id: "path3418",
    fill: inverted ? theme.orbit.paletteWhite : theme.orbit.paletteInkDark,
    d: "M197.156 68.928c-5.415 0-8.248-4.466-8.248-8.876 0-5.827 4.15-8.875 8.248-8.875 5.417 0 8.252 4.465 8.252 8.875 0 5.827-4.151 8.876-8.252 8.876m0-22.683a13.446 13.446 0 0 0-13.689 13.807 13.689 13.689 0 1 0 27.378 0 13.446 13.446 0 0 0-13.689-13.807"
  }), _react.default.createElement("path", {
    id: "path3420",
    fill: inverted ? theme.orbit.paletteWhite : theme.orbit.paletteInkDark,
    d: "M240.4 46.4a2.621 2.621 0 0 0-2.365 1.592l-8.46 17.715-.074-.156-8.48-17.595a2.58 2.58 0 0 0-2.385-1.556 2.525 2.525 0 0 0-2.553 2.553V71.11a2.573 2.573 0 1 0 5.146 0V59.338l6.106 12.94a2.315 2.315 0 0 0 2.243 1.424 2.417 2.417 0 0 0 2.247-1.437l6.023-12.925v11.809a2.573 2.573 0 0 0 5.146 0V48.994A2.454 2.454 0 0 0 240.4 46.4"
  })))), _react.default.createElement(LtMiddleMobile, null, _react.default.createElement("svg", {
    id: "svg3401",
    height: height,
    width: width,
    viewBox: "0 0 1283.91 1080"
  }, _ref3, _react.default.createElement("title", null, title), _react.default.createElement("g", null, _react.default.createElement("path", {
    fill: inverted ? theme.orbit.paletteWhite : theme.orbit.paletteInkDark,
    d: "M781.32,369.33c-6.43-6.43-14.28-9.87-22.66-9.87a32.27,32.27,0,0,0-22.82,9.87L589.06,516.19a31.81,31.81,0,0,0-9.5,23.26,32.15,32.15,0,0,0,9.5,23.57L735.84,709.8a32.39,32.39,0,0,0,22.82,9.87c8.38,0,16.16-3.44,22.66-9.87s10-14.59,9.88-23.12a32.53,32.53,0,0,0-9.88-22.37L656.61,539.6,781.32,414.89c13.17-13.24,13.17-32.32,0-45.56M560.78,391.78a31.57,31.57,0,0,0-32.17-32.17c-18.33,0-32.17,13.84-32.17,32.17V687c0,18.63,13.54,32.17,32.17,32.17,9.35,0,17.36-3.22,23.34-9.35A32.56,32.56,0,0,0,560.78,687Z"
  }), _react.default.createElement("path", {
    fill: inverted ? theme.orbit.paletteWhite : theme.orbit.paletteProductNormal,
    d: "M1128.45,514.84a35.31,35.31,0,1,0,35.31,35.31,35.38,35.38,0,0,0-35.31-35.31"
  }), _react.default.createElement("path", {
    fill: inverted ? theme.orbit.paletteWhite : theme.orbit.paletteProductNormal,
    d: "M1077.2,727.68a31.6,31.6,0,0,0-19-6.28,32.12,32.12,0,0,0-25.81,13c-40.17,54.46-97,100.17-164.21,132.12-69.87,33.22-149.77,50.8-231.24,50.8-124.26,0-240.9-40-328.27-112.59C266.7,770,233.85,729.55,211,684.66,187.62,638.73,175.8,590,175.73,539.83s11.89-98.9,35.31-144.91c34.41-67.56,91.79-125.24,165.85-166.83,76.83-43.09,166.76-65.84,260.2-65.84,81.47,0,161.52,17.66,231.54,51,67.33,32.09,124.19,78,164.29,132.64A32.06,32.06,0,0,0,1084.61,308c-46.38-63.22-111.54-116-188.38-152.62-78.62-37.48-168.17-57.23-259.14-57.23-139.23,0-270.37,45.26-369.35,127.33-48.7,40.4-87,87.6-113.86,140.35-28,55.06-42.27,113.56-42.27,174s14.22,118.95,42.27,174c40.25,78.93,106.53,145.88,191.67,193.61,86.33,48.4,187.18,74.06,291.54,74.06,90.67,0,180.07-19.67,258.55-57,76.68-36.43,141.76-89,188.22-151.94a32,32,0,0,0-6.66-44.89"
  })))));
};

SvgLogo.defaultProps = {
  theme: _Theme.themeDefault
};
var _default = SvgLogo;
exports.default = _default;