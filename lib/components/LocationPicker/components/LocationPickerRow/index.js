"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _CountryFlag = _interopRequireDefault(require("@kiwicom/orbit-components/lib/CountryFlag"));

var _Stack = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Stack"));

var _Text = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Text"));

var _reactRelay = require("react-relay");

var _slug = _interopRequireDefault(require("../../services/slug"));

var _PickerRow = _interopRequireDefault(require("../../primitives/PickerRow"));

var _toLocation = _interopRequireDefault(require("./services/toLocation"));

var LocationPickerRow = function LocationPickerRow(_ref) {
  var item = _ref.item,
      selected = _ref.selected,
      onSelect = _ref.onSelect;
  var type = item.type,
      name = item.name,
      code = item.code;
  var slug = (0, _slug.default)((0, _toLocation.default)(item));
  return React.createElement(_PickerRow.default, {
    onClick: function onClick() {
      return onSelect((0, _toLocation.default)(item));
    },
    selected: selected
  }, React.createElement(_Stack.default, {
    spacing: "condensed",
    flex: true,
    align: "center"
  }, type === "country" && React.createElement(_CountryFlag.default, {
    code: code.toLowerCase()
  }), React.createElement(_Text.default, {
    weight: "bold"
  }, name, " ", slug)));
};

var _default = (0, _reactRelay.createFragmentContainer)(LocationPickerRow, {
  item: function item() {
    var node = require("./__generated__/LocationPickerRow_item.graphql");

    if (node.hash && node.hash !== "ea4f52ee19d35821a5733d7a46588be4") {
      console.error("The definition of 'LocationPickerRow_item' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("./__generated__/LocationPickerRow_item.graphql");
  }
});

exports.default = _default;