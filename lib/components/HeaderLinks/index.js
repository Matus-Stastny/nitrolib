"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _AirplaneUp = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/AirplaneUp"));

var _ChevronDown = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/ChevronDown"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Stack = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Stack"));

var _mediaQuery = _interopRequireDefault(require("@kiwicom/orbit-components/lib/utils/mediaQuery"));

var _ClickOutside = _interopRequireDefault(require("../ClickOutside"));

var _Toggle = _interopRequireDefault(require("../Toggle"));

var _Popup = _interopRequireDefault(require("./primitives/Popup"));

var _IconWrapper = _interopRequireDefault(require("./primitives/IconWrapper"));

var _Links = _interopRequireDefault(require("./components/Links"));

var _api = _interopRequireDefault(require("./services/api"));

var _context2 = _interopRequireDefault(require("../../services/log/context"));

var _events = require("./consts/events");

// Different size than the existing component
var Mobile = _styledComponents.default.div.withConfig({
  displayName: "HeaderLinks__Mobile",
  componentId: "sc-19fc5de-0"
})(["display:flex;", ";"], _mediaQuery.default.desktop((0, _styledComponents.css)(["display:none;"]))); // Different size than the existing component


var Desktop = _styledComponents.default.div.withConfig({
  displayName: "HeaderLinks__Desktop",
  componentId: "sc-19fc5de-1"
})(["display:none;", ";"], _mediaQuery.default.desktop((0, _styledComponents.css)(["display:flex;"])));

var _ref4 =
/*#__PURE__*/
React.createElement(_AirplaneUp.default, null);

var _ref5 =
/*#__PURE__*/
React.createElement(_ChevronDown.default, {
  size: "small"
});

var HeaderLinks =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(HeaderLinks, _React$Component);

  function HeaderLinks() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, HeaderLinks);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(HeaderLinks)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      services: null
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "getNavBarLinks",
    /*#__PURE__*/
    (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var _this$props, languageId, currencyId, searchForm, testResponse, splitster, onFetch, log, _services;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = _this.props, languageId = _this$props.languageId, currencyId = _this$props.currencyId, searchForm = _this$props.searchForm, testResponse = _this$props.testResponse, splitster = _this$props.splitster, onFetch = _this$props.onFetch;
              log = _this.context.log;

              if (!testResponse) {
                _context.next = 5;
                break;
              }

              _this.setState({
                services: testResponse.items
              });

              return _context.abrupt("return");

            case 5:
              _context.prev = 5;
              _context.next = 8;
              return (0, _api.default)({
                languageId: languageId,
                currencyId: currencyId,
                searchForm: searchForm,
                splitster: splitster
              });

            case 8:
              _services = _context.sent;

              _this.setState({
                services: _services.items
              });

              if (onFetch) {
                onFetch(_services);
              }

              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](5);
              log(_events.HEADER_LINKS_ERROR, {
                error: String(_context.t0)
              });

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[5, 13]]);
    })));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "context", void 0);
    return _this;
  }

  (0, _createClass2.default)(HeaderLinks, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getNavBarLinks();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          inverted = _this$props2.inverted,
          active = _this$props2.active;
      var services = this.state.services;
      if (!services) return null;

      var _ref3 =
      /*#__PURE__*/
      React.createElement(_Stack.default, {
        direction: "column",
        spacing: "comfy"
      }, React.createElement(_Links.default, {
        inverted: inverted,
        services: services,
        active: active
      }));

      return React.createElement(React.Fragment, null, React.createElement(Mobile, null, React.createElement(_Toggle.default, null, function (_ref2) {
        var open = _ref2.open,
            onToggle = _ref2.onToggle;
        return React.createElement(_ClickOutside.default, {
          active: open,
          onClickOutside: onToggle
        }, React.createElement(React.Fragment, null, open && React.createElement(_Popup.default, null, services && services.length > 0 && _ref3), React.createElement(_IconWrapper.default, {
          act: open,
          inverted: inverted,
          onClick: onToggle
        }, _ref4, _ref5)));
      })), React.createElement(Desktop, null, services && services.length > 0 && React.createElement(_Stack.default, {
        flex: true
      }, React.createElement(_Links.default, {
        inverted: inverted,
        services: services,
        active: active
      }))));
    }
  }]);
  return HeaderLinks;
}(React.Component);

exports.default = HeaderLinks;
(0, _defineProperty2.default)(HeaderLinks, "contextType", _context2.default);