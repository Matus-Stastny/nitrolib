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

var _context = _interopRequireDefault(require("../../services/log/context"));

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
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "context", void 0);
    return _this;
  }

  (0, _createClass2.default)(Core, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          event = _this$props.event,
          props = _this$props.props;
      var log = this.context.log;
      log(event, props);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return Core;
}(React.Component);

exports.default = Core;
(0, _defineProperty2.default)(Core, "defaultProps", {
  props: {}
});
(0, _defineProperty2.default)(Core, "contextType", _context.default);