"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Stack = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Stack"));

var _Text = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Text"));

var _TextLink = _interopRequireDefault(require("@kiwicom/orbit-components/lib/TextLink"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _AccountCircle = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/AccountCircle"));

var _mediaQuery = _interopRequireDefault(require("@kiwicom/orbit-components/lib/utils/mediaQuery"));

var _Translate = _interopRequireDefault(require("../../../Translate"));

var _Theme = require("../../../../records/Theme");

var _utils = require("../../../../services/baggage/utils");

var Wrapper = _styledComponents.default.div.attrs({
  "data-test": function dataTest(_ref) {
    var _dataTest = _ref.dataTest;
    return _dataTest;
  }
}).withConfig({
  displayName: "BaggageItem__Wrapper",
  componentId: "sc-19toj4x-0"
})(["display:flex;flex-direction:column;align-items:center;margin-bottom:20px;", ";"], _mediaQuery.default.mediumMobile((0, _styledComponents.css)(["flex-direction:row;align-items:flex-start;margin-bottom:0px;"])));

var TextWrapper = _styledComponents.default.div.withConfig({
  displayName: "BaggageItem__TextWrapper",
  componentId: "sc-19toj4x-1"
})(["display:flex;width:100%;flex-wrap:nowrap;flex-grow:1;flex-shrink:1;justify-content:flex-start;flex-direction:column;align-items:flex-start;", ";", ";> *{margin-right:", ";}"], _mediaQuery.default.mediumMobile((0, _styledComponents.css)(["flex-direction:column;align-items:flex-start;"])), _mediaQuery.default.largeMobile((0, _styledComponents.css)(["flex-direction:row;align-items:center;"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.spaceXSmall;
});

TextWrapper.defaultProps = {
  theme: _Theme.themeDefault
};

var Title = _styledComponents.default.span.withConfig({
  displayName: "BaggageItem__Title",
  componentId: "sc-19toj4x-2"
})(["line-height:24px;"]);

var OptionalColumnWrapper = _styledComponents.default.div.withConfig({
  displayName: "BaggageItem__OptionalColumnWrapper",
  componentId: "sc-19toj4x-3"
})(["display:flex;width:100%;align-items:center;span,a{line-height:24px;}a{margin-left:28px;}svg{margin-left:3px;margin-right:11px;}", ";"], _mediaQuery.default.mediumMobile((0, _styledComponents.css)(["justify-content:", ";svg{margin-right:", ";}"], function (_ref3) {
  var hasLink = _ref3.hasLink;
  return hasLink ? "flex-end" : "flex-start";
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.orbit.spaceXSmall;
})));

OptionalColumnWrapper.defaultProps = {
  theme: _Theme.themeDefault,
  hasLink: false
};

var _ref7 =
/*#__PURE__*/
React.createElement(_AccountCircle.default, {
  size: "small",
  color: "secondary"
});

var _ref8 =
/*#__PURE__*/
React.createElement(_Translate.default, {
  t: "baggage_modal.summary.more_info"
});

var BaggageItem = function BaggageItem(_ref5) {
  var passengers = _ref5.passengers,
      category = _ref5.category,
      context = _ref5.context,
      amount = _ref5.amount,
      restrictions = _ref5.restrictions,
      FAQLinksHandler = _ref5.FAQLinksHandler;

  var getBaggageSize = function getBaggageSize(_ref6) {
    var height = _ref6.height,
        length = _ref6.length,
        weight = _ref6.weight,
        width = _ref6.width;
    return "".concat(length, " x ").concat(width, " x ").concat(height, " cm, ").concat(weight, " kg");
  };

  var getPassengerNames = function getPassengerNames(passengersArr) {
    return passengersArr.map(function (p) {
      return "".concat(p.firstName[0], ". ").concat(p.middleName ? "".concat(p.middleName[0], ".") : "", " ").concat(p.lastName);
    }).join(", ");
  };

  return React.createElement(Wrapper, {
    dataTest: "BaggageOverview-BaggageItem-".concat(category)
  }, React.createElement(_Stack.default, {
    shrink: true,
    spacing: "condensed"
  }, (0, _utils.getIconFromCategory)(category, "medium", "primary"), React.createElement(TextWrapper, null, React.createElement(_Text.default, {
    element: "p",
    weight: context === "MMB-PassengersSummary" ? "bold" : "normal",
    size: context === "MMB-PassengersSummary" ? "large" : "normal"
  }, React.createElement(Title, null, "".concat(amount, "\xD7 "), category === "holdBag" && "".concat(restrictions.weight, "kg  "), (0, _utils.getTextFromCategory)(category, function (x) {
    return x.toLowerCase();
  }))), React.createElement(Title, null, React.createElement(_Text.default, {
    element: "span",
    type: "secondary",
    size: context === "MMB-PassengersSummary" ? "normal" : "small"
  }, getBaggageSize(restrictions))))), React.createElement(OptionalColumnWrapper, {
    hasLink: !!FAQLinksHandler
  }, passengers && React.createElement(React.Fragment, null, _ref7, React.createElement(_Text.default, {
    element: "span",
    type: "secondary"
  }, getPassengerNames(passengers))), FAQLinksHandler && React.createElement(_TextLink.default, {
    size: "small",
    onClick: function onClick() {
      return FAQLinksHandler(category);
    }
  }, _ref8)));
};

var _default = BaggageItem;
exports.default = _default;