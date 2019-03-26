"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _mediaQuery = _interopRequireDefault(require("@kiwicom/orbit-components/lib/utils/mediaQuery"));

var _ItemWrapper = _interopRequireDefault(require("../../primitives/ItemWrapper"));

var _Translate = _interopRequireDefault(require("../../../../../Translate"));

var _context = require("../../../../../../services/intl/context");

var _ButtonLink = _interopRequireDefault(require("../../../../primitives/ButtonLink"));

var _Flex = _interopRequireDefault(require("../../../../../../primitives/Flex"));

var TripsBottomWrapper = _styledComponents.default.div.withConfig({
  displayName: "TripListBottom__TripsBottomWrapper",
  componentId: "sc-1tiy263-0"
})(["display:flex;width:120px;", ";"], _mediaQuery.default.mediumMobile((0, _styledComponents.css)(["width:180px;"])));

var _ref3 =
/*#__PURE__*/
React.createElement(_Translate.default, {
  t: "account.all_trips"
});

var TripListBottom = function TripListBottom(_ref) {
  var children = _ref.children;

  var _ref2 =
  /*#__PURE__*/
  React.createElement(TripsBottomWrapper, null, children);

  return React.createElement(_context.Consumer, null, function (intl) {
    return React.createElement(React.Fragment, null, React.createElement(_ItemWrapper.default, null, _ref2, React.createElement(_Flex.default, {
      y: "center"
    }, React.createElement(_ButtonLink.default, {
      color: "primary",
      marginLeft: 25,
      bold: true,
      href: "/".concat(intl.language.id, "/account#future")
    }, _ref3))));
  });
};

var _default = TripListBottom;
exports.default = _default;