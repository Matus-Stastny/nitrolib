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

var _reactDom = _interopRequireDefault(require("react-dom"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _rtl = require("@kiwicom/orbit-components/lib/utils/rtl");

var _mediaQuery = _interopRequireDefault(require("@kiwicom/orbit-components/lib/utils/mediaQuery"));

var _Theme = require("../../../../records/Theme");

var Container = _styledComponents.default.section.withConfig({
  displayName: "Core__Container",
  componentId: "sc-1ooqrty-0"
})(["display:flex;visibility:", ";position:fixed;top:0;left:0;width:100%;height:100%;background-color:", ";transition:background-color ", " ease-in-out;z-index:", ";"], function (_ref) {
  var shown = _ref.shown;
  return shown ? "visible" : "hidden";
}, function (_ref2) {
  var entered = _ref2.entered;
  return entered ? "rgba(0, 0, 0, .5)" : "transparent";
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.durationNormal;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.orbit.zIndexModal;
});

Container.defaultProps = {
  theme: _Theme.themeDefault
};
var rightCSS = (0, _styledComponents.css)(["", ":0;transform:", ";"], _rtl.right, function (_ref5) {
  var shown = _ref5.shown;
  return shown ? (0, _rtl.translate3d)("0") : (0, _rtl.translate3d)("480px, 0, 0");
});
var leftCSS = (0, _styledComponents.css)(["", ":0;transform:", ";"], _rtl.left, function (_ref6) {
  var shown = _ref6.shown;
  return shown ? (0, _rtl.translate3d)("0") : (0, _rtl.translate3d)("-480px, 0, 0");
});

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "Core__Wrapper",
  componentId: "sc-1ooqrty-1"
})(["", ";position:absolute;font-weight:", ";font-size:", ";background:", ";overflow-y:auto;height:100%;transition:transform ", " ease-in-out;box-shadow:0 6px 16px rgba(46,53,59,0.22),0 1px 3px rgba(0,0,0,0.09);max-width:320px;width:100%;", ";"], function (_ref7) {
  var inverted = _ref7.inverted;
  return !inverted ? rightCSS : leftCSS;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.orbit.fontWeightMedium;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.orbit.fontSizeTextNormal;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.orbit.paletteWhite;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.orbit.durationNormal;
}, _mediaQuery.default.tablet((0, _styledComponents.css)(["width:480px;"])));

Wrapper.defaultProps = {
  theme: _Theme.themeDefault
};

var Core =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Core, _React$Component);

  function Core() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Core);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Core)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "el", document.createElement("div"));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "ref", React.createRef());
    return _this;
  }

  (0, _createClass2.default)(Core, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (document.body) {
        document.body.appendChild(this.el);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (document.body) {
        document.body.removeChild(this.el);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          status = _this$props.status,
          inverted = _this$props.inverted,
          unmasked = _this$props.unmasked,
          _onClick = _this$props.onClick,
          children = _this$props.children;
      return _reactDom.default.createPortal(React.createElement(Container, {
        inverted: inverted,
        shown: status !== "exited",
        entered: !unmasked && status === "entered",
        ref: this.ref,
        onClick: function onClick(ev) {
          if (unmasked) return;

          if (_this2.ref.current === ev.target) {
            _onClick();
          }
        },
        role: "button",
        tabIndex: "0"
      }, React.createElement(Wrapper, {
        inverted: inverted,
        shown: status !== "exiting" && status !== "exited"
      }, children)), this.el);
    }
  }]);
  return Core;
}(React.Component);

exports.default = Core;