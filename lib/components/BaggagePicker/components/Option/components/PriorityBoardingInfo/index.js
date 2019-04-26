"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _PriorityBoarding = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/PriorityBoarding"));

var _TextLink = _interopRequireDefault(require("@kiwicom/orbit-components/lib/TextLink"));

var _Stack = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Stack"));

var _mediaQuery = _interopRequireDefault(require("@kiwicom/orbit-components/lib/utils/mediaQuery"));

var _Text = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Text"));

var _index = _interopRequireDefault(require("../../../../../Translate/index"));

var _Theme = require("../../../../../../records/Theme");

var FixWrapper = _styledComponents.default.div.withConfig({
  displayName: "PriorityBoardingInfo__FixWrapper",
  componentId: "n4f7um-0"
})(["&:last-child{margin-top:6px !important;}"]);

var IconWrapper = _styledComponents.default.div.withConfig({
  displayName: "PriorityBoardingInfo__IconWrapper",
  componentId: "n4f7um-1"
})(["border-top:1px solid ", ";min-width:24px;text-align:center;padding:6px 0px;", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.borderColorInput;
}, _mediaQuery.default.largeMobile((0, _styledComponents.css)(["padding:4px 0px;"])));

IconWrapper.defaultProps = {
  theme: _Theme.themeDefault
};

var _ref3 =
/*#__PURE__*/
React.createElement(IconWrapper, null, React.createElement(_PriorityBoarding.default, {
  color: "secondary",
  size: "small"
}));

var _ref4 =
/*#__PURE__*/
React.createElement(_index.default, {
  t: "baggage_modal.learn_more"
});

var PriorityBoardingInfo = function PriorityBoardingInfo(_ref2) {
  var airlines = _ref2.airlines,
      prioBoardingLinkHandler = _ref2.prioBoardingLinkHandler;
  return React.createElement(FixWrapper, null, React.createElement(_Stack.default, {
    flex: true,
    direction: "row",
    spacing: "condensed",
    align: "center",
    dataTest: "BaggagePicker-PriorityBoardingInfo"
  }, _ref3, React.createElement(_Text.default, {
    size: "small",
    element: "p"
  }, React.createElement(_index.default, {
    t: "baggage_modal.priority_boarding",
    values: {
      airlines: airlines.map(function (a) {
        return a.name;
      }).join(", ")
    }
  }), " ", React.createElement(_TextLink.default, {
    external: false,
    onClick: function onClick(e) {
      if (prioBoardingLinkHandler) {
        e.stopPropagation();
        prioBoardingLinkHandler(airlines);
      }
    },
    type: "secondary"
  }, _ref4))));
};

var _default = PriorityBoardingInfo;
exports.default = _default;