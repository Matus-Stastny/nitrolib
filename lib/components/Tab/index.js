"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

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

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _rtl = require("@kiwicom/orbit-components/lib/utils/rtl");

var _mediaQuery = _interopRequireDefault(require("@kiwicom/orbit-components/lib/utils/mediaQuery"));

var _styles = require("../../styles");

var _Theme = require("../../records/Theme");

var shadowMixin = (0, _styledComponents.css)(["box-shadow:0 0 3px 0 ", " inset;"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.paletteInkLighter;
});
var hoverMixin = (0, _styledComponents.css)(["cursor:pointer;&:hover{background:", ";}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.paletteWhite;
});

var Container = _styledComponents.default.button.withConfig({
  displayName: "Tab__Container",
  componentId: "et8nwy-0"
})(["flex:1;padding:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;height:34px;line-height:34px;border:", "px solid ", ";border-radius:0;background:", ";font-size:15px;font-weight:", ";", ";", ";transition:background ", ";margin-bottom:", ";", ";&:first-child{border-width:", "px;border-radius:", ";}&:last-child{border-radius:", ";}&:focus{outline:none;}&:active{", ";}&:disabled{color:", ";}"], _styles.border.size, function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.paletteInkLighter;
}, function (_ref4) {
  var theme = _ref4.theme,
      active = _ref4.active;
  return theme.orbit[active ? "paletteCloudNormal" : "paletteWhite"];
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.orbit.fontWeightMedium;
}, function (_ref6) {
  var active = _ref6.active;
  return active && shadowMixin;
}, function (_ref7) {
  var active = _ref7.active;
  return !active && hoverMixin;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.orbit.durationNormal;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.orbit.spaceXXSmall;
}, _mediaQuery.default.largeMobile((0, _styledComponents.css)(["border-width:", ";"], (0, _rtl.rtlSpacing)("".concat(_styles.border.size, "px ").concat(_styles.border.size, "px ").concat(_styles.border.size, "px 0")))), _styles.border.size, (0, _rtl.borderRadius)("3px 0 0 3px"), (0, _rtl.borderRadius)("0 3px 3px 0"), shadowMixin, function (_ref10) {
  var theme = _ref10.theme;
  return theme.orbit.paletteInkDark;
});

Container.defaultProps = {
  theme: _Theme.themeDefault
};

var Tab =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(Tab, _React$PureComponent);

  function Tab() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Tab);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Tab)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleClick", function () {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          id = _this$props.id;
      onClick(id);
    });
    return _this;
  }

  (0, _createClass2.default)(Tab, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          id = _this$props2.id,
          children = _this$props2.children,
          active = _this$props2.active;
      return React.createElement(Container, {
        id: id,
        onClick: this.handleClick,
        disabled: active,
        active: active
      }, children);
    }
  }]);
  return Tab;
}(React.PureComponent);

exports.default = Tab;
(0, _defineProperty2.default)(Tab, "defaultProps", {
  active: false
});