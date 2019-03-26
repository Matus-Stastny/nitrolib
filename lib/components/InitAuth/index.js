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

var _Auth = require("../../records/Auth");

var api = _interopRequireWildcard(require("../../services/auth/api"));

var _relay = require("../../services/utils/relay");

var cookies = _interopRequireWildcard(require("../../services/session/cookies"));

var _cookies2 = require("../../consts/cookies");

var InitAuth =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(InitAuth, _React$PureComponent);

  function InitAuth() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, InitAuth);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(InitAuth)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      auth: _Auth.authDefault,
      loading: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleMyBooking", function (input) {
      var onMyBooking = _this.props.onMyBooking;

      _this.setState({
        loading: true
      });

      return api.getMyBookingToken(input).then(onMyBooking).then(function () {
        _this.setState({
          loading: false
        });
      }).catch(function (err) {
        _this.setState({
          loading: false
        });

        return Promise.reject(err);
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleRegister", function (input) {
      var _this$props = _this.props,
          brand = _this$props.brand,
          onRegister = _this$props.onRegister;

      _this.setState({
        loading: true
      });

      return api.register(brand.id, input).then(onRegister).then(function () {
        _this.setState({
          loading: false
        });
      }).catch(function (err) {
        _this.setState({
          loading: false
        });

        return Promise.reject(err);
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleSocialAuth", function (provider) {
      var _this$props2 = _this.props,
          redirectURL = _this$props2.redirectURL,
          onSocialAuth = _this$props2.onSocialAuth;

      _this.setState({
        loading: true
      });

      return api.socialAuth(provider, redirectURL).then(onSocialAuth).then(function () {
        _this.setState({
          loading: false
        });
      }).catch(function (err) {
        _this.setState({
          loading: false
        });

        return Promise.reject(err);
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleSignIn", function (email, password) {
      var _this$props3 = _this.props,
          brand = _this$props3.brand,
          onSignIn = _this$props3.onSignIn;

      _this.setState({
        loading: true
      });

      return api.signIn({
        email: email,
        password: password,
        brand: brand.id
      }).then(function (auth) {
        if (auth.user.affiliateId) {
          cookies.save(_cookies2.AFFILIATE_ID, auth.user.affiliateId);
        } else {
          cookies.remove(_cookies2.AFFILIATE_ID);
        }

        onSignIn(auth.token);

        _this.setState({
          auth: auth,
          loading: false
        });
      }).catch(function (err) {
        _this.setState({
          loading: false
        });

        return Promise.reject(err);
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleSignOut", function () {
      var onSignOut = _this.props.onSignOut;
      onSignOut();

      _this.setState({
        auth: null
      });
    });
    return _this;
  }

  (0, _createClass2.default)(InitAuth, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var token = this.props.token;

      if (token === null) {
        return;
      }

      this.setState({
        loading: true
      });
      api.getTokenUser(token).then(function (user) {
        if (user.affiliateId) {
          cookies.save(_cookies2.AFFILIATE_ID, user.affiliateId);
        } else {
          cookies.remove(_cookies2.AFFILIATE_ID);
        }

        _this2.setState({
          auth: {
            type: "user",
            user: user,
            token: token
          },
          loading: false
        });
      }).catch(function () {
        // Ignoring errors here
        _this2.setState({
          loading: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          auth = _this$state.auth,
          loading = _this$state.loading;
      var children = this.props.children;
      return children({
        auth: auth,
        loading: loading,
        environment: (0, _relay.makeEnvironment)((0, _relay.makeCall)((auth === null || auth === void 0 ? void 0 : auth.token) || "")),
        onMyBooking: this.handleMyBooking,
        onRegister: this.handleRegister,
        onSocialAuth: this.handleSocialAuth,
        onSignIn: this.handleSignIn,
        onSignOut: this.handleSignOut
      });
    }
  }]);
  return InitAuth;
}(React.PureComponent);

exports.default = InitAuth;