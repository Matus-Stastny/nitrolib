"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _getMonth = _interopRequireDefault(require("date-fns/getMonth"));

var _Stack = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Stack"));

var _ChevronLeft = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/ChevronLeft"));

var _ChevronRight = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/ChevronRight"));

var _index = _interopRequireDefault(require("../Weeks/index"));

var _Days = _interopRequireDefault(require("../Days/Days"));

var _index2 = _interopRequireDefault(require("../Months/index"));

var _Theme = require("../../../../records/Theme");

var CalendarTop = _styledComponents.default.div.withConfig({
  displayName: "Calendar__CalendarTop",
  componentId: "zww0zh-0"
})(["margin-top:", ";display:flex;height:40px;"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.spaceSmall;
});

CalendarTop.defaultProps = {
  theme: _Theme.themeDefault
};

var Arrow = _styledComponents.default.div.withConfig({
  displayName: "Calendar__Arrow",
  componentId: "zww0zh-1"
})(["cursor:pointer;background:#e8edf1;height:32px;width:32px;display:flex;align-items:center;justify-content:center;border-radius:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.borderRadiusNormal;
});

Arrow.defaultProps = {
  theme: _Theme.themeDefault
};

var _ref4 =
/*#__PURE__*/
React.createElement(_ChevronLeft.default, {
  size: "small",
  color: "secondary"
});

var _ref5 =
/*#__PURE__*/
React.createElement(_ChevronRight.default, {
  size: "small",
  color: "secondary"
});

var Calendar = function Calendar(_ref3) {
  var value = _ref3.value,
      viewing = _ref3.viewing,
      min = _ref3.min,
      max = _ref3.max,
      onSelect = _ref3.onSelect,
      onDecrease = _ref3.onDecrease,
      onIncrease = _ref3.onIncrease;
  return React.createElement(React.Fragment, null, React.createElement(CalendarTop, null, React.createElement(_Stack.default, {
    align: "center",
    flex: true,
    justify: "between"
  }, React.createElement(Arrow, {
    onClick: onDecrease
  }, _ref4), React.createElement(_index2.default, {
    month: (0, _getMonth.default)(viewing),
    viewing: viewing
  }), React.createElement(Arrow, {
    onClick: onIncrease
  }, _ref5))), React.createElement(_index.default, {
    value: viewing
  }), React.createElement(_Days.default, {
    value: value,
    viewing: viewing,
    min: min,
    max: max,
    onSelect: onSelect
  }));
};

var _default = Calendar;
exports.default = _default;