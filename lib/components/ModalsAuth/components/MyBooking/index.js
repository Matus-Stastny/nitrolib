"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prop2 = _interopRequireDefault(require("ramda/src/prop"));

var _map2 = _interopRequireDefault(require("ramda/src/map"));

var _merge2 = _interopRequireDefault(require("ramda/src/merge"));

var _assoc2 = _interopRequireDefault(require("ramda/src/assoc"));

var _assocPath2 = _interopRequireDefault(require("ramda/src/assocPath"));

var _identity2 = _interopRequireDefault(require("ramda/src/identity"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _addYears = _interopRequireDefault(require("date-fns/addYears"));

var _parse = _interopRequireDefault(require("date-fns/parse"));

var _Button = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Button"));

var _Email = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Email"));

var _Ticket = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Ticket"));

var _Calendar = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Calendar"));

var _Alert = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Alert"));

var _index = _interopRequireDefault(require("../../../Query/index"));

var _index2 = _interopRequireDefault(require("../../../LogMount/index"));

var _index3 = _interopRequireDefault(require("../../../InputText/index"));

var _index4 = _interopRequireDefault(require("../../../IconText/index"));

var _index5 = _interopRequireDefault(require("../../../Translate/index"));

var _index6 = _interopRequireDefault(require("../../../IataPicker/index"));

var _index7 = _interopRequireDefault(require("../../../InputDate/index"));

var _parseDateFormat = _interopRequireDefault(require("../../../InputDate/services/parseDateFormat"));

var _firstFormError = _interopRequireDefault(require("../../../NavBar/services/firstFormError"));

var _context = require("../../../../services/intl/context");

var normalizers = _interopRequireWildcard(require("../../../../services/input/normalizers"));

var validators = _interopRequireWildcard(require("../../../../services/input/validators"));

var _isEmptish = _interopRequireDefault(require("../../../../services/utils/isEmptish"));

var _events = require("../../../../consts/events");

var FieldWrap = _styledComponents.default.div.withConfig({
  displayName: "MyBooking__FieldWrap",
  componentId: "sc-1jkrg7x-0"
})(["position:relative;margin:15px 0;"]);

var MIN = (0, _addYears.default)(new Date(), -5);
var MAX = (0, _addYears.default)(new Date(), 1);

var _ref2 =
/*#__PURE__*/
React.createElement(_index4.default, {
  icon: React.createElement(_Ticket.default, {
    color: "primary",
    size: "small"
  })
}, React.createElement(_index5.default, {
  t: "common.booking_number_colon"
}));

var _ref3 =
/*#__PURE__*/
React.createElement(_index4.default, {
  icon: React.createElement(_Email.default, {
    color: "primary",
    size: "small"
  })
}, React.createElement(_index5.default, {
  t: "common.email_colon"
}));

var _ref4 =
/*#__PURE__*/
React.createElement(_index4.default, {
  icon: React.createElement(_Calendar.default, {
    color: "primary",
    size: "small"
  })
}, React.createElement(_index5.default, {
  t: "common.departure_date_colon"
}));

var _ref8 =
/*#__PURE__*/
React.createElement(_index5.default, {
  t: "submit"
});

var MyBooking =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(MyBooking, _React$PureComponent);

  function MyBooking() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, MyBooking);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(MyBooking)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      fields: {
        bid: {
          value: "",
          error: "forms.this_field_must_be_filled",
          validate: validators.required,
          normalize: normalizers.numbers
        },
        email: {
          value: "",
          error: "forms.this_field_must_be_filled",
          validate: validators.email,
          normalize: _identity2.default
        },
        iata: {
          value: "",
          error: "forms.enter_iata_code",
          validate: validators.iata,
          normalize: _identity2.default
        },
        departure: {
          value: _this.props.now,
          // eslint-disable-line react/destructuring-assignment
          error: "",
          validate: validators.departure,
          normalize: _identity2.default
        }
      },
      submitted: false,
      error: ""
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleMount", function (query) {
      var now = _this.props.now; // ?bid=123&email=joe@doe.com&src=BRQ&dtime=18/10/2010

      if (query.bid) {
        _this.setState(function (state) {
          return (0, _assocPath2.default)(["fields", "bid", "value"], query.bid, state);
        });

        _this.setState(function (state) {
          return (0, _assocPath2.default)(["fields", "bid", "error"], "", state);
        });
      }

      if (query.email) {
        _this.setState(function (state) {
          return (0, _assocPath2.default)(["fields", "email", "value"], query.email, state);
        });

        _this.setState(function (state) {
          return (0, _assocPath2.default)(["fields", "email", "error"], "", state);
        });
      }

      if (query.src) {
        _this.setState(function (state) {
          return (0, _assocPath2.default)(["fields", "iata", "value"], query.src, state);
        });

        _this.setState(function (state) {
          return (0, _assocPath2.default)(["fields", "iata", "error"], "", state);
        });
      }

      if (query.dtime) {
        _this.setState(function (state) {
          return (0, _assocPath2.default)(["fields", "departure", "value"], (0, _parse.default)(query.dtime, "dd/MM/yyyy", now), state);
        });

        _this.setState(function (state) {
          return (0, _assocPath2.default)(["fields", "departure", "error"], "", state);
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleChange", function (_ref) {
      var id = _ref.id,
          value = _ref.value,
          error = _ref.error;

      _this.setState(function (state) {
        return {
          fields: (0, _assoc2.default)(id, {
            value: value,
            error: error
          }, state.fields)
        };
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleSelectIata", function (value) {
      var fields = _this.state.fields;
      var field = fields.iata;

      _this.setState(function (state) {
        return {
          fields: (0, _assoc2.default)("iata", (0, _merge2.default)(field, {
            value: value,
            error: field.validate(value)
          }), state.fields)
        };
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleChangeDeparture", function (value) {
      var fields = _this.state.fields;
      var field = fields.departure;

      _this.setState(function (state) {
        return {
          fields: (0, _assoc2.default)("departure", (0, _merge2.default)(field, {
            value: value,
            error: field.validate(value)
          }), state.fields)
        };
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleSubmit", function (ev) {
      ev.preventDefault();
      var _this$props = _this.props,
          loading = _this$props.loading,
          onMyBooking = _this$props.onMyBooking,
          onChange = _this$props.onChange;
      var fields = _this.state.fields;

      if (loading) {
        return Promise.resolve(null);
      }

      _this.setState({
        submitted: true,
        error: ""
      }); // $FlowExpected: Date !== string


      if (!(0, _isEmptish.default)((0, _map2.default)((0, _prop2.default)("error"), fields))) {
        return Promise.resolve(null);
      }

      return onMyBooking({
        bid: fields.bid.value,
        email: fields.email.value,
        iata: fields.iata.value,
        departure: fields.departure.value
      }).then(function () {
        onChange();
      }).catch(function (err) {
        var msg = err.message;

        if (msg === "Booking not found") {
          _this.setState({
            error: "account.my_booking_login_incorrect"
          });

          return;
        }

        _this.setState({
          error: "common.api_error"
        });
      });
    });
    return _this;
  }

  (0, _createClass2.default)(MyBooking, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          fields = _this$state.fields,
          submitted = _this$state.submitted,
          error = _this$state.error;
      var loading = this.props.loading;
      var errorSync = (0, _firstFormError.default)(fields);

      var _ref5 =
      /*#__PURE__*/
      React.createElement(FieldWrap, null, React.createElement(_Alert.default, {
        type: "critical"
      }, React.createElement(_index5.default, {
        t: error
      })));

      var _ref6 =
      /*#__PURE__*/
      React.createElement(FieldWrap, null, React.createElement(_Alert.default, {
        type: "critical"
      }, React.createElement(_index5.default, {
        t: errorSync
      })));

      var _ref7 =
      /*#__PURE__*/
      React.createElement(_Button.default, {
        block: true,
        submit: true,
        disabled: loading
      }, _ref8);

      return React.createElement("form", {
        onSubmit: this.handleSubmit
      }, React.createElement(_context.Consumer, null, function (intl) {
        return React.createElement(React.Fragment, null, React.createElement(_index.default, {
          onMount: _this2.handleMount
        }), React.createElement(_index2.default, {
          event: _events.MODAL_OPEN,
          props: {
            modal: "myBooking"
          }
        }), React.createElement(FieldWrap, null, _ref2, React.createElement(_index3.default, {
          id: "bid",
          value: fields.bid.value,
          onChange: _this2.handleChange,
          placeholder: intl.translate("common.booking_number_placeholder"),
          error: fields.bid.error,
          normalize: normalizers.numbers,
          validate: validators.required,
          showState: submitted
        })), React.createElement(FieldWrap, null, _ref3, React.createElement(_index3.default, {
          id: "email",
          value: fields.email.value,
          onChange: _this2.handleChange,
          placeholder: intl.translate("price_alert.web.email_placeholder"),
          error: intl.translate(fields.email.error),
          validate: validators.email,
          showState: submitted,
          autoComplete: "email"
        })), React.createElement(FieldWrap, null, React.createElement(_index6.default, {
          id: "iata",
          value: fields.iata.value,
          onSelect: _this2.handleSelectIata,
          error: intl.translate(fields.iata.error),
          showState: submitted
        })), React.createElement(FieldWrap, null, _ref4, React.createElement(_index7.default, {
          id: "departure",
          value: fields.departure.value,
          onChange: _this2.handleChangeDeparture,
          format: (0, _parseDateFormat.default)(intl.language.dateFormatLong),
          min: MIN,
          max: MAX
        })), error && _ref5, submitted && errorSync && _ref6, _ref7);
      }));
    }
  }]);
  return MyBooking;
}(React.PureComponent);

exports.default = MyBooking;
(0, _defineProperty2.default)(MyBooking, "defaultProps", {
  now: new Date()
});