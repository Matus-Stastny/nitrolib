"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _Alert = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Alert"));

var _environment = _interopRequireDefault(require("../../services/environment"));

var _AirportList = _interopRequireDefault(require("./AirportList"));

var _Translate = _interopRequireDefault(require("../Translate"));

var _graphql;

var _ref2 =
/*#__PURE__*/
React.createElement(_Alert.default, {
  type: "critical"
}, React.createElement(_Translate.default, {
  t: "common.api_error"
}));

var AirportListData = function AirportListData(_ref) {
  var value = _ref.value,
      onSelect = _ref.onSelect,
      environment = _ref.environment;
  return React.createElement(_reactRelay.QueryRenderer, {
    environment: environment,
    query: _graphql || (_graphql = function _graphql() {
      var node = require("./__generated__/AirportListDataQuery.graphql");

      if (node.hash && node.hash !== "ac5d0d52123d1c5371ab83d2f14a7146") {
        console.error("The definition of 'AirportListDataQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("./__generated__/AirportListDataQuery.graphql");
    }),
    variables: {
      input: value
    },
    render: function render(res) {
      if (res.error) {
        return _ref2;
      }

      if (!res.props || !res.props.allLocations) {
        return null;
      } // $FlowExpected: TODO describe


      return React.createElement(_AirportList.default, {
        list: res.props.allLocations,
        onSelect: onSelect
      });
    }
  });
};

AirportListData.defaultProps = {
  environment: _environment.default
};
var _default = AirportListData;
exports.default = _default;