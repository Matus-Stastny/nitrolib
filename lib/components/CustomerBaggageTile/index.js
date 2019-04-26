"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Tile = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Tile"));

var _Title = _interopRequireDefault(require("./components/Title"));

var _Content = _interopRequireDefault(require("./components/Content"));

var _getDefinitions = _interopRequireDefault(require("./services/getDefinitions"));

var _calculatePrice = _interopRequireDefault(require("./services/calculatePrice"));

var _getStatus = _interopRequireDefault(require("./services/getStatus"));

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "CustomerBaggageTile__Wrapper",
  componentId: "sc-5w7tfx-0"
})(["div:last-child > svg{display:", ";}"], function (_ref) {
  var isIconShowed = _ref.isIconShowed;
  return isIconShowed ? "inline" : "none";
});

var CustomerBaggageTile = function CustomerBaggageTile(_ref2) {
  var firstName = _ref2.firstName,
      middleName = _ref2.middleName,
      lastName = _ref2.lastName,
      icon = _ref2.icon,
      dayOfBirth = _ref2.dayOfBirth,
      isProcessing = _ref2.isProcessing,
      current = _ref2.current,
      selected = _ref2.selected,
      newDefinitions = _ref2.newDefinitions,
      onClick = _ref2.onClick,
      baggage = _ref2.baggage;
  var combinations = baggage.combinations;
  var handBag = (0, _getDefinitions.default)({
    current: current,
    selected: selected,
    baggage: baggage,
    newDefinitions: newDefinitions,
    bagType: "handBag"
  });
  var holdBag = (0, _getDefinitions.default)({
    current: current,
    selected: selected,
    baggage: baggage,
    newDefinitions: newDefinitions,
    bagType: "holdBag"
  });
  var status = (0, _getStatus.default)({
    current: current,
    selected: selected,
    isProcessing: isProcessing
  });
  return React.createElement(Wrapper, {
    isIconShowed: !!onClick && (status === "unpaid" || status === null)
  }, React.createElement(_Tile.default, {
    dataTest: "CustomerBaggageTile-".concat(status || "none"),
    onClick: onClick && onClick,
    title: React.createElement(_Title.default, {
      icon: icon,
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      orderStatus: status,
      price: (0, _calculatePrice.default)({
        selected: selected,
        current: current,
        combinations: combinations
      }),
      dayOfBirth: dayOfBirth
    }),
    description: React.createElement(_Content.default, {
      definitions: [].concat((0, _toConsumableArray2.default)(handBag), (0, _toConsumableArray2.default)(holdBag)),
      orderStatus: status
    })
  }));
};

var _default = CustomerBaggageTile;
exports.default = _default;