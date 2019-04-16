"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _queryString = _interopRequireDefault(require("query-string"));

var _Session = require("../../records/Session");

var _handleUserId = _interopRequireDefault(require("./services/handleUserId"));

var _handleAffiliateId = _interopRequireDefault(require("./services/handleAffiliateId"));

var _handleSessionId = _interopRequireDefault(require("./services/handleSessionId"));

var _ids = require("../../services/session/ids");

var _handleUTMs = _interopRequireDefault(require("./services/handleUTMs"));

var InitSession =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(InitSession, _React$PureComponent);

  function InitSession() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, InitSession);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(InitSession)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      session: _Session.sessionDefault
    });
    return _this;
  }

  (0, _createClass2.default)(InitSession, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // the order in which stuff should be determined is:
      // - URL
      // - Cookies / localStorage
      var _qs$parse = _queryString.default.parse(window.location.search),
          userId = _qs$parse.userId,
          affilId = _qs$parse.affilId,
          rest = (0, _objectWithoutProperties2.default)(_qs$parse, ["userId", "affilId"]);

      var session = {
        userId: (0, _handleUserId.default)(userId && String(userId)),
        sessionId: (0, _handleSessionId.default)(),
        pageViewId: (0, _ids.makePageViewId)(),
        affiliate: (0, _handleAffiliateId.default)(affilId && String(affilId), rest),
        UTMs: (0, _handleUTMs.default)(rest)
      };
      this.setState({
        session: session
      });
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var session = this.state.session;
      return children(session);
    }
  }]);
  return InitSession;
}(React.PureComponent);

exports.default = InitSession;