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

var _Event = require("../../records/Event");

var InitLog =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(InitLog, _React$PureComponent);

  function InitLog() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, InitLog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(InitLog)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleLog", function (ev, props) {
      var _this$props = _this.props,
          onLog = _this$props.onLog,
          globals = _this$props.globals;
      onLog((0, _Event.make)(ev, props), globals);
    });
    return _this;
  }

  (0, _createClass2.default)(InitLog, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children({
        log: this.handleLog
      });
    }
  }]);
  return InitLog;
}(React.PureComponent);

exports.default = InitLog;