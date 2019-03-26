"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _AirportResult = _interopRequireDefault(require("../AirportResult"));

var AirportList = function AirportList(_ref) {
  var list = _ref.list,
      onSelect = _ref.onSelect;
  return !list.edges ? null : list.edges.map(function (edge) {
    return edge && edge.node;
  }).filter(Boolean).map(function (item) {
    return (// $FlowExpected: Relay type issue
      React.createElement(_AirportResult.default, {
        key: item.locationId,
        item: item,
        onClick: onSelect
      })
    );
  });
};

var _default = (0, _reactRelay.createFragmentContainer)(AirportList, {
  list: function list() {
    var node = require("./__generated__/AirportList_list.graphql");

    if (node.hash && node.hash !== "dea27172a064221e8b297658c04232af") {
      console.error("The definition of 'AirportList_list' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("./__generated__/AirportList_list.graphql");
  }
});

exports.default = _default;