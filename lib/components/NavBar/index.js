"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _rtl = require("@kiwicom/orbit-components/lib/utils/rtl");

var _mediaQuery = _interopRequireDefault(require("@kiwicom/orbit-components/lib/utils/mediaQuery"));

var _Stack = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Stack"));

var _styles = require("../../styles");

var _Desktop = _interopRequireDefault(require("../Desktop"));

var _Mobile = _interopRequireDefault(require("../Mobile"));

var _Theme = require("../../records/Theme");

var _Flex = _interopRequireDefault(require("../../primitives/Flex"));

var _Language = _interopRequireDefault(require("../Language"));

var _context = require("../../services/brand/context");

var _Help = _interopRequireDefault(require("./components/Help"));

var _Menu = _interopRequireDefault(require("./components/Menu"));

var _Logo = _interopRequireDefault(require("./components/Logo"));

var _Currency = _interopRequireDefault(require("../Currency"));

var _marginMixin = _interopRequireDefault(require("./styles/marginMixin"));

var Container = (0, _styledComponents.default)(_Flex.default).withConfig({
  displayName: "NavBar__Container",
  componentId: "tzd2dn-0"
})(["width:100%;position:relative;height:", "px;background-color:", ";color:", ";box-shadow:0 0 3px rgba(0,0,0,0.25);padding:0 10px;font-size:", ";font-weight:", ";box-sizing:border-box;", ";"], _styles.navbar.height, function (_ref) {
  var theme = _ref.theme,
      inverted = _ref.inverted;
  return inverted ? theme.orbit.paletteProductNormal : theme.orbit.paletteWhite;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.paletteInkNormal;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.fontSizeTextSmall;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.orbit.fontWeightMedium;
}, _mediaQuery.default.tablet((0, _styledComponents.css)(["position:fixed;top:0;", ":0;"], _rtl.left)));
Container.defaultProps = {
  theme: _Theme.themeDefault
};

var WrapperChild = _styledComponents.default.div.withConfig({
  displayName: "NavBar__WrapperChild",
  componentId: "tzd2dn-1"
})(["display:flex;align-items:center;", ";"], _marginMixin.default);

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "NavBar__Wrapper",
  componentId: "tzd2dn-2"
})(["display:flex;align-items:center;font-size:", ";font-weight:", ";"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.orbit.spaceSmall;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.orbit.fontWeightMedium;
});

var ButtonWrapper = _styledComponents.default.div.withConfig({
  displayName: "NavBar__ButtonWrapper",
  componentId: "tzd2dn-3"
})(["display:flex;align-items:center;"]);

Wrapper.defaultProps = {
  theme: _Theme.themeDefault
};

var NavBar = function NavBar(_ref7) {
  var headerLinks = _ref7.headerLinks,
      starred = _ref7.starred,
      subscription = _ref7.subscription,
      debug = _ref7.debug,
      portal = _ref7.portal,
      inverted = _ref7.inverted,
      onOpenFaq = _ref7.onOpenFaq,
      onSetModal = _ref7.onSetModal,
      onSaveLanguage = _ref7.onSaveLanguage,
      onSelectTrip = _ref7.onSelectTrip,
      onLogoClick = _ref7.onLogoClick;
  return React.createElement(Container, {
    x: "space-between",
    y: "center",
    "data-test": "NavBar",
    inverted: inverted
  }, React.createElement(_Stack.default, {
    flex: true,
    shrink: true,
    inline: true,
    align: "center"
  }, React.createElement(_Logo.default, {
    inverted: inverted,
    onClick: onLogoClick
  }), headerLinks && React.createElement(_context.Consumer, null, function (brand) {
    return brand.id === "kiwicom" && headerLinks;
  })), React.createElement(_Flex.default, {
    y: "center"
  }, React.createElement(Wrapper, null, React.createElement(_Desktop.default, {
    display: "flex"
  }, React.createElement(WrapperChild, null, React.createElement(ButtonWrapper, null, React.createElement(WrapperChild, null, React.createElement(_Language.default, {
    positionMenuDesktop: 270,
    positionMenuTablet: 5,
    inverted: inverted,
    onChange: onSaveLanguage,
    onSetModal: onSetModal
  })), React.createElement(WrapperChild, null, React.createElement(_Currency.default, {
    positionMenuDesktop: 270,
    positionMenuTablet: 5,
    inverted: inverted,
    onSetModal: onSetModal
  })), React.createElement(WrapperChild, null, React.createElement(_Help.default, {
    onOpen: onOpenFaq,
    inverted: inverted
  }))))), React.createElement(WrapperChild, null, starred), React.createElement(_Mobile.default, null, React.createElement(WrapperChild, null, React.createElement(_Help.default, {
    onOpen: onOpenFaq,
    inverted: inverted
  }))), React.createElement(_Menu.default, {
    subscription: subscription,
    debug: debug,
    onSetModal: onSetModal,
    onSaveLanguage: onSaveLanguage,
    onSelectTrip: onSelectTrip,
    inverted: inverted,
    portal: portal
  }))));
};

NavBar.defaultProps = {
  headerLinks: null,
  debug: null,
  inverted: false
};
var _default = NavBar;
exports.default = _default;