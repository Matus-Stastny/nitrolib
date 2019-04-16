"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _BaggagePersonalItemNone = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/BaggagePersonalItemNone"));

var _Text = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Text"));

var _BaggageItem = _interopRequireDefault(require("../BaggageItem"));

var _Theme = require("../../../../records/Theme");

var _index = _interopRequireDefault(require("../../../Translate/index"));

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "Content__Wrapper",
  componentId: "rvze3v-0"
})(["padding:17px 0px 17px 28px;> div{margin-bottom:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.spaceXXXSmall;
});

Wrapper.defaultProps = {
  theme: _Theme.themeDefault
};

var ContactUsText = _styledComponents.default.p.withConfig({
  displayName: "Content__ContactUsText",
  componentId: "rvze3v-1"
})(["color:", ";font-size:", ";font-weight:", ";font-family:", ";margin-right:", ";a{color:", ";&:hover{color:", ";}}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.colorTextPrimary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.fontSizeTextNormal;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.orbit.fontWeightMedium;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.orbit.fontFamily;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.orbit.spaceMedium;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.orbit.colorTextPrimary;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.orbit.colorTextLinkPrimaryHover;
});

ContactUsText.defaultProps = {
  theme: _Theme.themeDefault
};

var NoPersonalItemWrapper = _styledComponents.default.div.withConfig({
  displayName: "Content__NoPersonalItemWrapper",
  componentId: "rvze3v-2"
})(["svg{margin-right:", ";}"], function (_ref9) {
  var theme = _ref9.theme;
  return theme.orbit.spaceXSmall;
});

NoPersonalItemWrapper.defaultProps = {
  theme: _Theme.themeDefault
};

var _ref11 =
/*#__PURE__*/
React.createElement(NoPersonalItemWrapper, null, React.createElement(_Text.default, {
  element: "span",
  type: "secondary"
}, React.createElement(_BaggagePersonalItemNone.default, {
  size: "small"
}), React.createElement(_index.default, {
  t: "baggage_modal.select.no_personal_item"
})));

var Content = function Content(_ref10) {
  var definitions = _ref10.definitions,
      orderStatus = _ref10.orderStatus;
  var hasPersonalItem = definitions.some(function (bag) {
    return bag.category === "personalItem";
  });
  return React.createElement(Wrapper, {
    "data-test": "CustomerBaggageTile-Content"
  }, definitions && definitions.map(function (bag, index) {
    return React.createElement(_BaggageItem.default, {
      key: index // eslint-disable-line
      ,
      restrictions: bag.restrictions,
      category: bag.category,
      isCurrent: bag.isCurrent,
      orderStatus: orderStatus
    });
  }), !hasPersonalItem && _ref11, orderStatus === "notAvailable" && React.createElement(ContactUsText, {
    "data-test": "CustomerBaggageTile-ContactUsText"
  }, React.createElement(_index.default, {
    t: "baggage_modal.contact_support",
    values: {
      link: "/support"
    },
    html: true
  })));
};

var _default = Content;
exports.default = _default;