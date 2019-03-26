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

var ESCAPE = "Escape";

var CloseByKey =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(CloseByKey, _React$PureComponent);

  function CloseByKey() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, CloseByKey);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(CloseByKey)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleKeyDown", function (ev) {
      ev.stopPropagation();
      var _this$props = _this.props,
          closeKey = _this$props.closeKey,
          onClose = _this$props.onClose;

      if (onClose && ev.key === closeKey) {
        onClose(ev);
      }
    });
    return _this;
  }

  (0, _createClass2.default)(CloseByKey, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _document = document,
          body = _document.body;

      if (body) {
        body.addEventListener("keydown", this.handleKeyDown);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _document2 = document,
          body = _document2.body;

      if (body) {
        body.removeEventListener("keydown", this.handleKeyDown);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children;
    }
  }]);
  return CloseByKey;
}(React.PureComponent);

exports.default = CloseByKey;
(0, _defineProperty2.default)(CloseByKey, "defaultProps", {
  closeKey: ESCAPE
});