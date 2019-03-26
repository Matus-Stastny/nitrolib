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

var _Theme = require("../../records/Theme");

var TIP_ARROW_SIZE = 5;
var TIP_OFFSET = 2;

var Container = _styledComponents.default.span.withConfig({
  displayName: "Tooltip__Container",
  componentId: "sc-11si9k6-0"
})(["position:relative;display:", ";", ";"], function (_ref) {
  var inline = _ref.inline;
  return inline ? "inline-block" : "block";
}, function (_ref2) {
  var inline = _ref2.inline;
  return !inline && "\n      width: 100%;\n    ";
});

var Tip = _styledComponents.default.span.withConfig({
  displayName: "Tooltip__Tip",
  componentId: "sc-11si9k6-1"
})(["position:absolute;opacity:", ";", " ", " transition:opacity 0.2s;z-index:2;", ";", ";", " &:before{display:block;content:\"\";position:absolute;width:0;height:0;border-color:transparent;border-style:", ";border-width:", "px;", ";", ";}"], function (_ref3) {
  var shown = _ref3.shown;
  return shown ? "1" : "0";
}, function (_ref4) {
  var mobile = _ref4.mobile;
  return !mobile && "display: none;";
}, function (_ref5) {
  var shown = _ref5.shown;
  return !shown && "\n      width: 0;\n      height: 0;\n      overflow: hidden;\n    ";
}, function (_ref6) {
  var position = _ref6.position,
      theme = _ref6.theme;
  return position === "left" && "\n        ".concat((0, _rtl.right)({
    theme: theme
  }), ": 100%;\n        padding-").concat((0, _rtl.right)({
    theme: theme
  }), ": ").concat(TIP_ARROW_SIZE, "px;\n        margin-").concat((0, _rtl.right)({
    theme: theme
  }), ": ").concat(TIP_OFFSET, "px;\n      ") || position === "right" && "\n        ".concat((0, _rtl.left)({
    theme: theme
  }), ": 100%;\n        padding-").concat((0, _rtl.left)({
    theme: theme
  }), ": ").concat(TIP_ARROW_SIZE, "px;\n        margin-").concat((0, _rtl.left)({
    theme: theme
  }), ": ").concat(TIP_OFFSET, "px;\n      ") || position === "top" && "\n        bottom: 100%;\n        padding-bottom: ".concat(TIP_ARROW_SIZE, "px;\n        margin-bottom: ").concat(TIP_OFFSET, "px;\n      ") || position === "bottom" && "\n        top: 100%;\n        padding-top: ".concat(TIP_ARROW_SIZE, "px;\n        margin-top: ").concat(TIP_OFFSET, "px;\n      ");
}, function (_ref7) {
  var position = _ref7.position;
  return position === "left" || position === "right" ? "\n        top: 50%;\n        transform: translateY(-50%);\n      " : "\n        left: 50%;\n        transform: translateX(-50%);\n      ";
}, _mediaQuery.default.tablet((0, _styledComponents.css)(["display:block;"])), function (_ref8) {
  var theme = _ref8.theme;
  return theme.orbit.borderStyleCard;
}, TIP_ARROW_SIZE + 1, function (_ref9) {
  var theme = _ref9.theme,
      position = _ref9.position;
  return position === "left" && "\n          ".concat((0, _rtl.right)({
    theme: theme
  }), ": 0;\n          border-").concat((0, _rtl.right)({
    theme: theme
  }), "-width: 0;\n          border-").concat((0, _rtl.left)({
    theme: theme
  }), "-color: ").concat(theme.orbit.paletteInkDark, ";\n        ") || position === "right" && "\n          ".concat((0, _rtl.left)({
    theme: theme
  }), ": 0;\n          border-").concat((0, _rtl.left)({
    theme: theme
  }), "-width: 0;\n          border-").concat((0, _rtl.right)({
    theme: theme
  }), "-color: ").concat(theme.orbit.paletteInkDark, ";\n        ") || position === "top" && "\n          bottom: 0;\n          border-bottom-width: 0;\n          border-top-color: ".concat(theme.orbit.paletteInkDark, ";\n        ") || position === "bottom" && "\n          top: 0;\n          border-top-width: 0;\n          border-bottom-color: ".concat(theme.orbit.paletteInkDark, ";\n        ");
}, function (_ref10) {
  var position = _ref10.position;
  return position === "left" || position === "right" ? "\n          top: 50%;\n          transform: translateY(-50%);\n        " : "\n          left: 50%;\n          transform: translateX(-50%);\n        ";
});

Tip.defaultProps = {
  theme: _Theme.themeDefault
};

var TipContent = _styledComponents.default.span.withConfig({
  displayName: "Tooltip__TipContent",
  componentId: "sc-11si9k6-2"
})(["display:block;line-height:30px;padding:0px 8px;color:", ";background-color:", ";border-radius:", ";"], function (_ref11) {
  var theme = _ref11.theme;
  return theme.orbit.paletteWhite;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.orbit.paletteInkDark;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.orbit.borderRadiusNormal;
});

TipContent.defaultProps = {
  theme: _Theme.themeDefault
};

var Tooltip =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(Tooltip, _React$PureComponent);

  function Tooltip() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Tooltip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Tooltip)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      shown: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleIn", function () {
      _this.setState({
        shown: true
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleOut", function () {
      _this.setState({
        shown: false
      });
    });
    return _this;
  }

  (0, _createClass2.default)(Tooltip, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          tip = _this$props.tip,
          position = _this$props.position,
          inline = _this$props.inline,
          mobile = _this$props.mobile,
          children = _this$props.children;
      var shown = this.state.shown;
      return React.createElement(Container, {
        onTouchStart: this.handleIn,
        onTouchEnd: this.handleOut,
        onMouseOver: this.handleIn,
        onMouseOut: this.handleOut,
        onFocus: this.handleIn,
        onBlur: this.handleOut,
        inline: inline
      }, children, React.createElement(Tip, {
        shown: shown,
        position: position,
        mobile: mobile
      }, React.createElement(TipContent, null, tip)));
    }
  }]);
  return Tooltip;
}(React.PureComponent);

(0, _defineProperty2.default)(Tooltip, "defaultProps", {
  inline: false,
  mobile: false
});
var _default = Tooltip;
exports.default = _default;