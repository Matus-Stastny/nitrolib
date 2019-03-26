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

var _querystring = _interopRequireDefault(require("querystring"));

var Query =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Query, _React$Component);

  function Query() {
    (0, _classCallCheck2.default)(this, Query);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Query).apply(this, arguments));
  }

  (0, _createClass2.default)(Query, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          query = _this$props.query,
          onMount = _this$props.onMount;
      var search = query || window.location.search;
      onMount(_querystring.default.parse(search.replace(/^\?/, "")));
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return Query;
}(React.Component);

exports.default = Query;