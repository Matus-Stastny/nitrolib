"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _LocationPickerRow = _interopRequireDefault(require("../LocationPickerRow"));

var LocationPickerResultList = function LocationPickerResultList(_ref) {
  var list = _ref.list,
      selectedId = _ref.selectedId,
      onSelect = _ref.onSelect;
  return list.edges ? list.edges.map(function (edge) {
    return edge === null || edge === void 0 ? void 0 : edge.node;
  }).filter(Boolean).map(function (item) {
    return (// $FlowExpected: Relay
      React.createElement(_LocationPickerRow.default, {
        item: item,
        key: item.id,
        selected: selectedId === item.id,
        onSelect: onSelect
      })
    );
  }) : null;
};

var _default = (0, _reactRelay.createFragmentContainer)(LocationPickerResultList, {
  list: function list() {
    var node = require("./__generated__/LocationPickerResultList_list.graphql");

    if (node.hash && node.hash !== "1ea2d7544f75d1136a7717149d16ebea") {
      console.error("The definition of 'LocationPickerResultList_list' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("./__generated__/LocationPickerResultList_list.graphql");
  }
});

exports.default = _default;