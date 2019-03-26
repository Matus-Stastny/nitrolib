"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _Alert = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Alert"));

var _InputField = _interopRequireDefault(require("@kiwicom/orbit-components/lib/InputField"));

var _environment = _interopRequireDefault(require("../../services/environment"));

var _PickerDropDown = _interopRequireDefault(require("./primitives/PickerDropDown"));

var _NoResult = _interopRequireDefault(require("./primitives/NoResult"));

var _ClickOutside = _interopRequireDefault(require("../ClickOutside"));

var _Text = _interopRequireDefault(require("../Text"));

var _LocationPickerResultList = _interopRequireDefault(require("./components/LocationPickerResultList"));

var _placeholder = _interopRequireDefault(require("./services/placeholder"));

var _graphql;

var _ref =
/*#__PURE__*/
React.createElement(_Alert.default, {
  type: "critical"
}, React.createElement(_Text.default, {
  t: "common.api_error"
}));

var _ref2 =
/*#__PURE__*/
React.createElement(_NoResult.default, null, React.createElement(_Text.default, {
  t: "forms.places_no_results"
}));

var LocationPicker =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(LocationPicker, _React$Component);

  function LocationPicker() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, LocationPicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(LocationPicker)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      active: false,
      input: ""
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "node", React.createRef());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleClose", function () {
      _this.setState({
        active: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleSelect", function (item) {
      var onChange = _this.props.onChange;
      onChange(item);

      _this.setState({
        active: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleChange", function (ev) {
      _this.setState({
        input: ev.target.value,
        active: true
      });
    });
    return _this;
  }

  (0, _createClass2.default)(LocationPicker, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          value = _this$props.value,
          label = _this$props.label,
          icon = _this$props.icon,
          environment = _this$props.environment;
      var _this$state = this.state,
          active = _this$state.active,
          input = _this$state.input;
      var placeholder = value ? (0, _placeholder.default)(value) : "";
      return React.createElement(_ClickOutside.default, {
        active: active,
        onClickOutside: this.handleClose
      }, React.createElement(React.Fragment, null, React.createElement(_InputField.default, {
        inlineLabel: true,
        label: label,
        placeholder: placeholder,
        onChange: this.handleChange,
        prefix: icon,
        value: active ? input : ""
      }), input && active && React.createElement(_reactRelay.QueryRenderer, {
        environment: environment,
        query: _graphql || (_graphql = function _graphql() {
          var node = require("./__generated__/LocationPickerQuery.graphql");

          if (node.hash && node.hash !== "2d45cc81c784d75b8c943feb47b77b9e") {
            console.error("The definition of 'LocationPickerQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
          }

          return require("./__generated__/LocationPickerQuery.graphql");
        }),
        variables: {
          input: input
        },
        render: function render(res) {
          if (res.error) {
            return _ref;
          }

          if (!res.props) {
            return null;
          }

          if (!res.props.allLocations) {
            // TODO render this in the list if length is 0
            return _ref2;
          }

          return React.createElement(_PickerDropDown.default, {
            ref: _this2.node
          }, React.createElement(_LocationPickerResultList.default, {
            list: res.props.allLocations,
            selectedId: value && value.id,
            onSelect: _this2.handleSelect
          }));
        }
      })));
    }
  }]);
  return LocationPicker;
}(React.Component);

(0, _defineProperty2.default)(LocationPicker, "defaultProps", {
  environment: _environment.default
});
var _default = LocationPicker;
exports.default = _default;