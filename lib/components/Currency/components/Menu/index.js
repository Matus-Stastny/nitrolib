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

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _rtl = require("@kiwicom/orbit-components/lib/utils/rtl");

var _mediaQuery = _interopRequireDefault(require("@kiwicom/orbit-components/lib/utils/mediaQuery"));

var _Theme = require("../../../../records/Theme");

var MODALS = _interopRequireWildcard(require("../../../../consts/modals"));

var _index = _interopRequireDefault(require("../List/index"));

var Container = _styledComponents.default.div.withConfig({
  displayName: "Menu__Container",
  componentId: "sc-1sp9vkk-0"
})(["position:absolute;", ":0;top:50px;width:calc(100% - 40px);max-height:calc(100vh - 200px);margin:0 20px;box-sizing:border-box;padding:15px 12px;overflow-y:scroll;box-shadow:0 0 10px 5px rgba(0,0,0,0.1);border-radius:", ";background:", ";", " ", ""],
/* sc-custom "right" */
_rtl.right, function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.borderRadiusNormal;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.paletteWhite;
}, _mediaQuery.default.largeMobile((0, _styledComponents.css)(["width:500px;padding:20px;margin:0;max-height:calc(100vh - 60px);overflow-y:auto;", ":inherit;", ":", "px;"],
/* sc-custom "left" */
_rtl.left,
/* sc-custom "right" */
_rtl.right, function (_ref3) {
  var positionMenuTablet = _ref3.positionMenuTablet;
  return positionMenuTablet;
})), _mediaQuery.default.desktop((0, _styledComponents.css)(["", ":", "px;"],
/* sc-custom "right" */
_rtl.right, function (_ref4) {
  var positionMenuDesktop = _ref4.positionMenuDesktop;
  return positionMenuDesktop;
})));

Container.defaultProps = {
  theme: _Theme.themeDefault
};

var Recommended = _styledComponents.default.div.withConfig({
  displayName: "Menu__Recommended",
  componentId: "sc-1sp9vkk-1"
})(["position:relative;width:100%;padding-bottom:13px;margin-bottom:12px;&:after{position:absolute;bottom:0;", ":0;display:block;content:\"\";width:calc(100% - 10px);height:1px;margin:0 5px;background:", ";}"],
/* sc-custom "left" */
_rtl.left, function (_ref5) {
  var theme = _ref5.theme;
  return theme.orbit.paletteCloudNormal;
});

Recommended.defaultProps = {
  theme: _Theme.themeDefault
};

var Menu =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Menu, _React$Component);

  function Menu() {
    (0, _classCallCheck2.default)(this, Menu);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Menu).apply(this, arguments));
  }

  (0, _createClass2.default)(Menu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var onSetModal = this.props.onSetModal;

      if (onSetModal) {
        onSetModal(MODALS.CURRENCY_MENU);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var onSetModal = this.props.onSetModal;

      if (onSetModal) {
        onSetModal(MODALS.NONE);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          current = _this$props.current,
          available = _this$props.available,
          recommended = _this$props.recommended,
          onChange = _this$props.onChange,
          positionMenuDesktop = _this$props.positionMenuDesktop,
          positionMenuTablet = _this$props.positionMenuTablet;
      return React.createElement(Container, {
        positionMenuDesktop: positionMenuDesktop,
        positionMenuTablet: positionMenuTablet
      }, recommended.length > 0 && React.createElement(Recommended, null, React.createElement(_index.default, {
        list: recommended,
        active: current,
        onSetCurrency: onChange
      })), React.createElement(_index.default, {
        list: available,
        active: current,
        onSetCurrency: onChange
      }));
    }
  }]);
  return Menu;
}(React.Component);

var _default = Menu;
exports.default = _default;