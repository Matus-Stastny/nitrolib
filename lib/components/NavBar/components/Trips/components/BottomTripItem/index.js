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

var _ItemWrapper = _interopRequireDefault(require("../../primitives/ItemWrapper"));

var handleSelect = function handleSelect(id, language) {
  window.location.href = "/".concat(language, "/account/bookings/").concat(id);
};

var Img = _styledComponents.default.img.withConfig({
  displayName: "BottomTripItem__Img",
  componentId: "sc-1d4zb1x-0"
})(["display:flex;justify-content:center;overflow:hidden;height:30px;width:auto;", ";"], _mediaQuery.default.mediumMobile((0, _styledComponents.css)(["height:50px;width:45px;"])));

var BottomTripItem = function BottomTripItem(_ref) {
  var id = _ref.id,
      imageUrl = _ref.imageUrl,
      lang = _ref.lang;
  return _react.default.createElement(_ItemWrapper.default, {
    onClick: function onClick() {
      return handleSelect(id, lang);
    }
  }, _react.default.createElement(Img, {
    src: imageUrl,
    alt: "trips"
  }));
};

var _default = BottomTripItem;
exports.default = _default;