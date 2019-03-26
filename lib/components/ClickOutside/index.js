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

var ClickOutside =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(ClickOutside, _React$PureComponent);

  function ClickOutside() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ClickOutside);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ClickOutside)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleClickOutside", function (ev) {
      var _this$props = _this.props,
          active = _this$props.active,
          onClickOutside = _this$props.onClickOutside;

      if (active && _this.node && ev.target instanceof Node && !_this.node.contains(ev.target)) {
        onClickOutside(ev);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "node", void 0);
    return _this;
  }

  (0, _createClass2.default)(ClickOutside, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("click", this.handleClickOutside, true);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("click", this.handleClickOutside, true);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      return React.createElement("div", {
        ref: function ref(node) {
          _this2.node = node;
        }
      }, children);
    }
  }]);
  return ClickOutside;
}(React.PureComponent);

exports.default = ClickOutside;
(0, _defineProperty2.default)(ClickOutside, "defaultProps", {
  active: true
});