"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _Currency = require("../../records/Currency");

var _filterCurrencies = _interopRequireDefault(require("./services/filterCurrencies"));

var _resolveCurrency = _interopRequireDefault(require("./services/resolveCurrency"));

var _getGeoCountry = _interopRequireDefault(require("./services/getGeoCountry"));

var _getCurrencies = _interopRequireDefault(require("./services/getCurrencies"));

var _getCandidate = _interopRequireDefault(require("./services/getCandidate"));

var _getRecommended = _interopRequireDefault(require("./services/getRecommended"));

/* eslint-disable react/no-unused-prop-types, react/no-unused-state */
// FIXME try to rewrite to Relay
// would require too much 'Currencies' type refactoring, so not done immediately
var CurrencyProvider =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(CurrencyProvider, _React$PureComponent);

  function CurrencyProvider() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, CurrencyProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(CurrencyProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      currency: null,
      loading: false,
      all: {},
      available: {},
      recommended: [],
      country: ""
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleChange", function (code) {
      var available = _this.state.available;
      var onChange = _this.props.onChange;
      var currency = available[code];

      if (currency) {
        _this.setState({
          currency: currency
        });

        onChange(code);
      }
    });
    return _this;
  }

  (0, _createClass2.default)(CurrencyProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(props, state) {
      if (!state.all) {
        this.loadData();
      }
    }
  }, {
    key: "loadData",
    value: function () {
      var _loadData = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var _this$props, getCurrencies, getGeoCountry, ip, _ref, _ref2, all, country;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, getCurrencies = _this$props.getCurrencies, getGeoCountry = _this$props.getGeoCountry, ip = _this$props.ip;
                this.setState({
                  loading: true
                });
                _context.next = 4;
                return Promise.all([getCurrencies(), getGeoCountry(ip)]);

              case 4:
                _ref = _context.sent;
                _ref2 = (0, _slicedToArray2.default)(_ref, 2);
                all = _ref2[0];
                country = _ref2[1];
                this.setState({
                  loading: false,
                  all: all,
                  country: country
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          currency = _this$state.currency,
          available = _this$state.available,
          recommended = _this$state.recommended;
      var children = this.props.children;

      if (!currency) {
        return children({
          currency: _Currency.currencyDefault,
          available: {},
          recommended: [],
          onChange: function onChange() {}
        });
      }

      return children({
        currency: currency,
        available: available,
        recommended: recommended,
        onChange: this.handleChange
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (state.currency !== null) {
        return null;
      }

      if (!state.all || !state.country) {
        return null;
      }

      var countryCurrency = props.countries[state.country].currency || "";
      var languageCurrency = props.langCurrency;
      var candidate = (0, _getCandidate.default)({
        initial: props.initialCurrency,
        country: countryCurrency,
        lang: languageCurrency
      });
      var available = (0, _filterCurrencies.default)(props.affiliate, props.brand.payments.whitelisted_currencies, state.all);
      var recommended = (0, _getRecommended.default)(countryCurrency, languageCurrency, props.mostUsed, available);
      return {
        currency: (0, _resolveCurrency.default)(state.all, available, candidate),
        available: available,
        recommended: recommended
      };
    }
  }]);
  return CurrencyProvider;
}(React.PureComponent);

exports.default = CurrencyProvider;
(0, _defineProperty2.default)(CurrencyProvider, "defaultProps", {
  mostUsed: _Currency.MOST_USED_CURRENCIES,
  getCurrencies: _getCurrencies.default,
  getGeoCountry: _getGeoCountry.default
});