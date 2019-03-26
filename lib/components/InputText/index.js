"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.InputText = void 0;

var _always2 = _interopRequireDefault(require("ramda/src/always"));

var _identity2 = _interopRequireDefault(require("ramda/src/identity"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _omit2 = _interopRequireDefault(require("ramda/src/omit"));

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _rtl = require("@kiwicom/orbit-components/lib/utils/rtl");

var _border = _interopRequireWildcard(require("../../styles/mixins/border"));

var _Translate = _interopRequireDefault(require("../Translate"));

var _TranslateNode = _interopRequireDefault(require("../TranslateNode"));

var _Theme = require("../../records/Theme");

var Label = _styledComponents.default.label.withConfig({
  displayName: "InputText__Label",
  componentId: "og24tu-0"
})(["display:flex;position:relative;padding:0 10px;border-radius:1px;align-items:center;", ";background:", ";"], _border.default, function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.paletteWhite;
});

Label.defaultProps = {
  theme: _Theme.themeDefault
};

var Input = _styledComponents.default.input.withConfig({
  displayName: "InputText__Input",
  componentId: "og24tu-1"
})(["flex:1;height:44px;padding:0;border:none;width:100%;color:", ";font-size:", ";font-weight:", ";&:focus{outline:none;}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.paletteInkNormalActive;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.fontSizeTextNormal;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.orbit.fontWeightMedium;
});

Input.defaultProps = {
  theme: _Theme.themeDefault
};
var stateMixin = (0, _styledComponents.css)(["position:absolute;font-size:10px;font-weight:", ";", ":0;"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.orbit.fontWeightNormal;
}, _rtl.right);

var States = _styledComponents.default.div.withConfig({
  displayName: "InputText__States",
  componentId: "og24tu-2"
})(["display:flex;"]);

var Error = _styledComponents.default.div.withConfig({
  displayName: "InputText__Error",
  componentId: "og24tu-3"
})(["", ";color:", ";"], stateMixin, function (_ref6) {
  var theme = _ref6.theme,
      active = _ref6.active;
  return theme.orbit[active ? "paletteProductNormal" : "colorTextError"];
});

Error.defaultProps = {
  theme: _Theme.themeDefault
};

var Hint = _styledComponents.default.span.withConfig({
  displayName: "InputText__Hint",
  componentId: "og24tu-4"
})(["", ";color:", ";"], stateMixin, function (_ref7) {
  var theme = _ref7.theme;
  return theme.orbit.paletteProductNormal;
});

Hint.defaultProps = {
  theme: _Theme.themeDefault
};

var HintText = _styledComponents.default.a.withConfig({
  displayName: "InputText__HintText",
  componentId: "og24tu-5"
})(["font-weight:", ";text-decoration:underline;cursor:pointer;"], function (_ref8) {
  var theme = _ref8.theme;
  return theme.orbit.fontWeightBold;
});

HintText.defaultProps = {
  theme: _Theme.themeDefault
};
var omitProps = (0, _omit2.default)(["showState", "forwardedRef", "validate", "normalize", "corrector"]);

var InputText =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(InputText, _React$PureComponent);

  function InputText() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, InputText);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(InputText)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      hint: "",
      active: false,
      visited: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleHint", function () {
      var hint = _this.state.hint;
      var _this$props = _this.props,
          id = _this$props.id,
          normalize = _this$props.normalize,
          validate = _this$props.validate,
          onChange = _this$props.onChange;
      var value = normalize(hint);
      var error = validate(value);

      _this.setState({
        hint: ""
      });

      onChange({
        value: value,
        error: error,
        id: id
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleChange", function (ev) {
      var _this$props2 = _this.props,
          id = _this$props2.id,
          normalize = _this$props2.normalize,
          validate = _this$props2.validate,
          corrector = _this$props2.corrector,
          onChange = _this$props2.onChange;
      var value = normalize(ev.target.value);
      var error = validate(value);
      var hint = corrector(value);

      _this.setState({
        hint: hint
      });

      onChange({
        value: value,
        error: error,
        id: id
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleFocus", function (ev) {
      var onFocus = _this.props.onFocus;

      _this.setState({
        active: true
      });

      if (onFocus) {
        onFocus(ev);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleBlur", function (ev) {
      var onBlur = _this.props.onBlur;

      _this.setState({
        active: false,
        visited: true
      });

      if (onBlur) {
        onBlur(ev);
      }
    });
    return _this;
  }

  (0, _createClass2.default)(InputText, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          value = _this$props3.value,
          error = _this$props3.error,
          placeholder = _this$props3.placeholder,
          showState = _this$props3.showState,
          forwardedRef = _this$props3.forwardedRef;
      var _this$state = this.state,
          hint = _this$state.hint,
          active = _this$state.active,
          visited = _this$state.visited;
      var borderState = (0, _border.getBorderState)({
        active: active,
        visited: visited || showState,
        error: Boolean(error),
        hint: Boolean(hint)
      });
      return React.createElement(React.Fragment, null, React.createElement(Label, {
        state: borderState
      }, React.createElement(Input, (0, _extends2.default)({}, omitProps(this.props), {
        ref: forwardedRef,
        value: value,
        onChange: this.handleChange,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        placeholder: placeholder
      }))), React.createElement(States, null, borderState === "error" && React.createElement(Error, {
        active: active
      }, React.createElement(_Translate.default, {
        t: error
      })), borderState === "hint" && React.createElement(Hint, {
        onClick: this.handleHint
      }, React.createElement(_TranslateNode.default, {
        t: "common.did_you_mean",
        values: {
          x: React.createElement(HintText, null, hint)
        }
      }))));
    }
  }]);
  return InputText;
}(React.PureComponent);

exports.InputText = InputText;
(0, _defineProperty2.default)(InputText, "defaultProps", {
  type: "text",
  placeholder: null,
  showState: false,
  error: "",
  normalize: _identity2.default,
  validate: (0, _always2.default)(""),
  corrector: (0, _always2.default)("")
});
// TODO find a nicer way to do this

/* eslint-disable react/no-multi-comp */
var InputTextRef = React.forwardRef(function (props, ref) {
  return React.createElement(InputText, (0, _extends2.default)({}, props, {
    forwardedRef: ref
  }));
});
var _default = InputTextRef;
exports.default = _default;