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

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _rtl = require("@kiwicom/orbit-components/lib/utils/rtl");

var _mediaQuery = _interopRequireDefault(require("@kiwicom/orbit-components/lib/utils/mediaQuery"));

var _Theme = require("../../../records/Theme");

var _Languages = require("../../../records/Languages");

var _button = _interopRequireDefault(require("../../../styles/mixins/button"));

var _Translate = _interopRequireDefault(require("../../Translate"));

var MODALS = _interopRequireWildcard(require("../../../consts/modals"));

var _menu = require("../services/menu");

var _LanguageName = _interopRequireDefault(require("./LanguageName"));

var _ContinentName = _interopRequireDefault(require("./ContinentName"));

var MenuWrapper = _styledComponents.default.div.withConfig({
  displayName: "Menu__MenuWrapper",
  componentId: "iljhyo-0"
})(["background-color:", ";position:absolute;top:50px;display:flex;overflow-x:hidden;border-radius:", ";box-shadow:", ";", ";", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.paletteWhite;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.borderRadiusNormal;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.boxShadowElevatedLevel1;
}, function (_ref4) {
  var flat = _ref4.flat;
  return !flat && _mediaQuery.default.tablet((0, _styledComponents.css)(["", ";"], function (_ref5) {
    var positionMenuTablet = _ref5.positionMenuTablet;
    return (0, _styledComponents.css)(["", ":", "px;"],
    /* sc-custom "right" */
    _rtl.right, positionMenuTablet);
  }));
}, function (_ref6) {
  var flat = _ref6.flat;
  return !flat && _mediaQuery.default.desktop((0, _styledComponents.css)(["", ";"], function (_ref7) {
    var positionMenuDesktop = _ref7.positionMenuDesktop;
    return (0, _styledComponents.css)(["", ":", "px;"],
    /* sc-custom "right" */
    _rtl.right, positionMenuDesktop);
  }));
});

MenuWrapper.defaultProps = {
  theme: _Theme.themeDefault
};

var ContinentList = _styledComponents.default.div.withConfig({
  displayName: "Menu__ContinentList",
  componentId: "iljhyo-1"
})(["min-width:200px;font-size:", ";font-weight:", ";display:none;", ";"], function (_ref8) {
  var theme = _ref8.theme;
  return theme.orbit.fontSizeTextSmall;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.orbit.fontWeightMedium;
}, _mediaQuery.default.tablet((0, _styledComponents.css)(["display:block;"])));

ContinentList.defaultProps = {
  theme: _Theme.themeDefault
};

var ContinentButton = _styledComponents.default.button.withConfig({
  displayName: "Menu__ContinentButton",
  componentId: "iljhyo-2"
})(["", ";display:flex;width:100%;text-align:left;background:", ";color:", ";padding:14px 16px;line-height:16px;cursor:pointer;&:hover{background-color:", ";color:", ";}"], _button.default, function (_ref10) {
  var theme = _ref10.theme,
      active = _ref10.active;
  return active ? theme.orbit.paletteCloudNormal : theme.orbit.paletteWhite;
}, function (_ref11) {
  var theme = _ref11.theme,
      active = _ref11.active;
  return active && theme.orbit.paletteProductNormal;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.orbit.paletteCloudNormal;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.orbit.paletteProductNormal;
});

ContinentButton.defaultProps = {
  theme: _Theme.themeDefault
};

var LanguageList = _styledComponents.default.div.withConfig({
  displayName: "Menu__LanguageList",
  componentId: "iljhyo-3"
})(["padding:10px;line-height:20px;box-sizing:border-box;overflow-y:auto;overflow-x:hidden;max-height:calc(100vh - 60px);", ";", ";"], function (_ref14) {
  var flat = _ref14.flat;
  return !flat && _mediaQuery.default.tablet((0, _styledComponents.css)(["width:560px;"]));
}, _mediaQuery.default.largeMobile((0, _styledComponents.css)(["padding:15px 12px;"])));

var LanguageListWrapper = _styledComponents.default.div.withConfig({
  displayName: "Menu__LanguageListWrapper",
  componentId: "iljhyo-4"
})(["width:", "px;height:", "px;max-height:682px;", ";"], function (_ref15) {
  var width = _ref15.width;
  return width;
}, function (_ref16) {
  var height = _ref16.height;
  return height;
}, _mediaQuery.default.tablet((0, _styledComponents.css)(["display:flex;flex-direction:column;flex-wrap:wrap;"])));

var LanguageItem = _styledComponents.default.div.withConfig({
  displayName: "Menu__LanguageItem",
  componentId: "iljhyo-5"
})(["background-color:", ";color:", ";width:100%;height:26px;display:inline-flex;align-items:center;border-radius:", ";padding-", ":5px;margin-bottom:5px;box-sizing:border-box;cursor:pointer;", " ", ";"], function (_ref17) {
  var theme = _ref17.theme,
      active = _ref17.active;
  return active && theme.orbit.paletteProductNormal;
}, function (_ref18) {
  var theme = _ref18.theme,
      active = _ref18.active;
  return active && theme.orbit.paletteWhite;
}, function (_ref19) {
  var theme = _ref19.theme;
  return theme.orbit.borderRadiusNormal;
},
/* sc-custom "left" */
_rtl.left, function (_ref20) {
  var active = _ref20.active;
  return !active && (0, _styledComponents.css)(["&:hover{background-color:", ";color:", ";}"], function (_ref21) {
    var theme = _ref21.theme;
    return theme.orbit.paletteCloudNormalHover;
  }, function (_ref22) {
    var theme = _ref22.theme;
    return theme.orbit.paletteInkNormalHover;
  });
}, _mediaQuery.default.tablet((0, _styledComponents.css)(["width:180px;"])));

LanguageItem.defaultProps = {
  theme: _Theme.themeDefault
};

var _ref23 =
/*#__PURE__*/
React.createElement(_Translate.default, {
  t: "common.languages_all"
});

var Menu =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Menu, _React$Component);

  function Menu() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Menu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Menu)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      continent: ""
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleChange", function (lang) {
      var onChange = _this.props.onChange;
      return onChange ? onChange(lang) : "eur";
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleContinent", function (continent) {
      _this.setState({
        continent: continent
      });
    });
    return _this;
  }

  (0, _createClass2.default)(Menu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var onSetModal = this.props.onSetModal;

      if (onSetModal) {
        onSetModal(MODALS.LANGUAGE_MENU);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var onSetModal = this.props.onSetModal;

      if (onSetModal) {
        onSetModal(MODALS.NONE);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var continent = this.state.continent;
      var _this$props = this.props,
          currentId = _this$props.currentId,
          flat = _this$props.flat,
          languages = _this$props.languages,
          continents = _this$props.continents,
          positionMenuDesktop = _this$props.positionMenuDesktop,
          positionMenuTablet = _this$props.positionMenuTablet;
      var filteredLanguages = continent === "" ? languages : (0, _Languages.getByContinent)(languages, continent);
      return React.createElement(MenuWrapper, {
        flat: flat,
        positionMenuDesktop: positionMenuDesktop,
        positionMenuTablet: positionMenuTablet
      }, !flat && React.createElement(ContinentList, null, React.createElement(ContinentButton, {
        active: continent === "",
        onClick: function onClick() {
          return _this2.handleContinent("");
        }
      }, _ref23), continents.map(function (item) {
        return React.createElement(ContinentButton, {
          key: item,
          active: item === continent,
          onClick: function onClick() {
            return _this2.handleContinent(item);
          }
        }, React.createElement(_ContinentName.default, {
          id: item
        }));
      })), React.createElement(LanguageList, {
        flat: flat
      }, React.createElement(LanguageListWrapper, {
        height: (0, _menu.getLanguageWrapperHeight)(filteredLanguages, flat),
        width: (0, _menu.getLanguageWrapperWidth)(filteredLanguages, flat)
      }, filteredLanguages.map(function (language) {
        return React.createElement(LanguageItem, {
          key: language.id,
          active: language.id === currentId,
          onClick: function onClick() {
            return _this2.handleChange(language.id);
          }
        }, React.createElement(_LanguageName.default, {
          language: language
        }));
      }))));
    }
  }]);
  return Menu;
}(React.Component);

exports.default = Menu;