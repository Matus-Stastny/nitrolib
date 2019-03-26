"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AirportResultUnwrapped = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _CountryFlag = _interopRequireDefault(require("@kiwicom/orbit-components/lib/CountryFlag"));

var _Theme = require("../../records/Theme");

var _button = _interopRequireDefault(require("../../styles/mixins/button"));

var Container = _styledComponents.default.button.withConfig({
  displayName: "AirportResult__Container",
  componentId: "sc-1cbq8wi-0"
})(["", ";display:flex;cursor:pointer;height:48px;width:100%;padding:12px;background:", ";text-align:start;box-shadow:0 1px 0 ", ";transition:background ", ";&:hover{background:", ";}"], _button.default, function (_ref) {
  var theme = _ref.theme,
      selected = _ref.selected;
  return theme.orbit[selected ? "paletteCloudNormal" : "paletteWhite"];
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.paletteCloudNormal;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.durationNormal;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.orbit.paletteCloudNormal;
});

Container.defaultProps = {
  theme: _Theme.themeDefault
};

var Name = _styledComponents.default.span.withConfig({
  displayName: "AirportResult__Name",
  componentId: "sc-1cbq8wi-1"
})(["direction:ltr;margin:0 6px;"]);

var AirportResult =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(AirportResult, _React$PureComponent);

  function AirportResult() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, AirportResult);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AirportResult)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleClick", function () {
      var _this$props = _this.props,
          item = _this$props.item,
          onClick = _this$props.onClick;

      if (typeof item.locationId === "string") {
        onClick(item.locationId);
      }
    });
    return _this;
  }

  (0, _createClass2.default)(AirportResult, [{
    key: "render",
    value: function render() {
      var _item$country, _item$city;

      var _this$props2 = this.props,
          item = _this$props2.item,
          selected = _this$props2.selected;
      var country = ((_item$country = item.country) === null || _item$country === void 0 ? void 0 : _item$country.locationId) || "anywhere";
      return React.createElement(Container, {
        onClick: this.handleClick,
        selected: selected
      }, React.createElement(_CountryFlag.default, {
        code: country.toLowerCase()
      }), React.createElement(Name, null, "".concat(String((_item$city = item.city) === null || _item$city === void 0 ? void 0 : _item$city.name), " (").concat(String(item.locationId), ")")));
    }
  }]);
  return AirportResult;
}(React.PureComponent);

var AirportResultUnwrapped = AirportResult;
exports.AirportResultUnwrapped = AirportResultUnwrapped;

var _default = (0, _reactRelay.createFragmentContainer)(AirportResult, {
  item: function item() {
    var node = require("./__generated__/AirportResult_item.graphql");

    if (node.hash && node.hash !== "8e1fa20cf89c00ead07979a1b1a2d2e4") {
      console.error("The definition of 'AirportResult_item' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("./__generated__/AirportResult_item.graphql");
  }
});

exports.default = _default;