"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _values2 = _interopRequireDefault(require("ramda/src/values"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Text = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Text"));

var _Stack = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Stack"));

var _BaggagePersonalItemNone = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/BaggagePersonalItemNone"));

var _mediaQuery = _interopRequireDefault(require("@kiwicom/orbit-components/lib/utils/mediaQuery"));

var _Theme = require("../../records/Theme");

var _BaggageItem = _interopRequireDefault(require("./components/BaggageItem"));

var _index = _interopRequireDefault(require("../Translate/index"));

var Wrapper = _styledComponents.default.div.attrs({
  "data-test": function dataTest(_ref) {
    var context = _ref.context;
    return "BaggageOverview-".concat(context);
  }
}).withConfig({
  displayName: "BaggageOverview__Wrapper",
  componentId: "sc-1l5i4pq-0"
})(["width:100%;> *{margin-bottom:10px;", ";}"], _mediaQuery.default.mediumMobile((0, _styledComponents.css)(["margin-bottom:", ";"], function (_ref2) {
  var theme = _ref2.theme,
      context = _ref2.context;
  return context === "MMB-PassengersSummary" ? theme.orbit.spaceXSmall : theme.orbit.spaceXXSmall;
})));

Wrapper.defaultProps = {
  theme: _Theme.themeDefault,
  context: "booking"
};

var _ref3 =
/*#__PURE__*/
React.createElement(_Stack.default, {
  shrink: true,
  spacing: "condensed",
  align: "center",
  dataTest: "BaggageOverview-NoPersonalItem"
}, React.createElement(_BaggagePersonalItemNone.default, {
  size: "medium",
  color: "primary"
}), React.createElement(_Text.default, null, React.createElement(_index.default, {
  t: "baggage_modal.select.no_personal_item"
})));

var NoPersonalItem = function NoPersonalItem() {
  return _ref3;
};

var _ref5 =
/*#__PURE__*/
React.createElement(NoPersonalItem, null);

var BaggageOverview = function BaggageOverview(_ref4) {
  var definitions = _ref4.definitions,
      definitionWithPassengers = _ref4.definitionWithPassengers,
      context = _ref4.context,
      FAQLinksHandler = _ref4.FAQLinksHandler;

  var getDefinitions = function getDefinitions() {
    if (definitionWithPassengers) {
      return definitionWithPassengers;
    }

    if (definitions) {
      var groupedDefinitions = definitions.reduce(function (acc, def) {
        if (acc[def.id]) {
          acc[def.id].amount += 1;
        } else {
          acc[def.id] = (0, _objectSpread2.default)({
            amount: 1
          }, def);
        }

        return acc;
      }, {});
      return (0, _values2.default)(groupedDefinitions);
    }

    return null;
  };

  var baggages = getDefinitions();
  return React.createElement(Wrapper, {
    context: context
  }, baggages && baggages.some(function (bag) {
    return bag.category === "personalItem";
  }) && _ref5, baggages && baggages.map(function (bag, index) {
    return React.createElement(_BaggageItem.default, {
      key: index // eslint-disable-line
      ,
      amount: bag.passengers ? bag.passengers.length : bag.amount,
      passengers: bag.passengers,
      category: bag.category,
      restrictions: bag.restrictions,
      FAQLinksHandler: FAQLinksHandler,
      context: context
    });
  }));
};

var _default = BaggageOverview;
exports.default = _default;