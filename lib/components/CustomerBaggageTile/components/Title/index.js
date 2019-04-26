"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Stack = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Stack"));

var _mediaQuery = _interopRequireDefault(require("@kiwicom/orbit-components/lib/utils/mediaQuery"));

var _Text = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Text"));

var _Badge = _interopRequireDefault(require("./components/Badge"));

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "Title__Wrapper",
  componentId: "dlv2le-0"
})(["display:flex;flex-direction:column;align-items:flex-start;", ";svg{display:\"inline\";}> span{margin-left:28px;", ";}"], _mediaQuery.default.largeMobile((0, _styledComponents.css)(["flex-direction:row;align-items:center;"])), _mediaQuery.default.largeMobile((0, _styledComponents.css)(["margin-left:10px;"])));

var Title = function Title(_ref) {
  var firstName = _ref.firstName,
      middleName = _ref.middleName,
      lastName = _ref.lastName,
      icon = _ref.icon,
      dayOfBirth = _ref.dayOfBirth,
      orderStatus = _ref.orderStatus,
      price = _ref.price;
  return React.createElement(Wrapper, {
    "data-test": "CustomerBaggageTile-Title"
  }, React.createElement(_Stack.default, {
    inline: true,
    align: "center",
    spacing: "condensed"
  }, icon, React.createElement(_Text.default, {
    element: "span",
    weight: "bold",
    size: "large"
  }, "".concat(firstName, "\n        ").concat(middleName ? "".concat(middleName) : "", "\n        ").concat(lastName).concat(dayOfBirth ? " ".concat(dayOfBirth) : ""))), orderStatus && React.createElement(_Badge.default, {
    orderStatus: orderStatus,
    price: price
  }));
};

var _default = Title;
exports.default = _default;