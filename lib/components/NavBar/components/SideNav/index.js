"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _MenuHamburger = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/MenuHamburger"));

var _angleRight = _interopRequireDefault(require("react-icons/lib/fa/angle-right"));

var _Modal = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Modal"));

var _Portal = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Portal"));

var _ModalSection = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Modal/ModalSection"));

var _rtl = require("@kiwicom/orbit-components/lib/utils/rtl");

var _Translate = _interopRequireDefault(require("../../../Translate"));

var _ClientOnly = _interopRequireDefault(require("../../../ClientOnly"));

var _Mobile = _interopRequireDefault(require("../../../Mobile"));

var _Language = _interopRequireDefault(require("../../../Language"));

var _context = require("../../../../services/brand/context");

var _context2 = require("../../../../services/auth/context");

var _Theme = require("../../../../records/Theme");

var _Currency = _interopRequireDefault(require("../../../Currency"));

var _SideBar = _interopRequireDefault(require("../../../SideBar"));

var _MenuGroup = _interopRequireDefault(require("./MenuGroup"));

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

var _BrandedMenuItem = _interopRequireDefault(require("./BrandedMenuItem"));

var _menu = require("./services/menu");

var MODALS = _interopRequireWildcard(require("../../../../consts/modals"));

var _button = _interopRequireDefault(require("../../../../styles/mixins/button"));

var MediaIcons = _styledComponents.default.div.withConfig({
  displayName: "SideNav__MediaIcons",
  componentId: "i1ybzg-0"
})(["margin-top:20px;"]);

var CurrencySpacing = _styledComponents.default.div.withConfig({
  displayName: "SideNav__CurrencySpacing",
  componentId: "i1ybzg-1"
})(["margin-top:10px;"]);

var Content = _styledComponents.default.div.withConfig({
  displayName: "SideNav__Content",
  componentId: "i1ybzg-2"
})(["margin-top:75px;padding-bottom:24px;.socialIcon{margin:0 14px;width:20px;height:20px;text-decoration:none;}"]);

var Close = _styledComponents.default.button.withConfig({
  displayName: "SideNav__Close",
  componentId: "i1ybzg-3"
})(["", ";position:absolute;top:0;", ":0;color:", ";padding:", ";font-size:", ";cursor:pointer;"], _button.default, _rtl.right, function (_ref) {
  var theme = _ref.theme;
  return theme.orbit.paletteProductNormal;
}, (0, _rtl.rtlSpacing)("23px 30px 10px 0"), function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.fontSizeTextNormal;
});

Close.defaultProps = {
  theme: _Theme.themeDefault
};
var CloseIcon = (0, _styledComponents.default)(_angleRight.default).withConfig({
  displayName: "SideNav__CloseIcon",
  componentId: "i1ybzg-4"
})(["height:14px;width:14px;top:-28px;", ":-5px;"], _rtl.right);
CloseIcon.defaultProps = {
  theme: _Theme.themeDefault
};

var MenuOpen = _styledComponents.default.button.withConfig({
  displayName: "SideNav__MenuOpen",
  componentId: "i1ybzg-5"
})(["", ";cursor:pointer;display:flex;padding:0 2px;svg{fill:", ";height:20px;}&:hover{background:", ";border-radius:3px;svg{fill:", ";}}"], _button.default, function (_ref3) {
  var inverted = _ref3.inverted,
      theme = _ref3.theme;
  return inverted && theme.orbit.paletteWhite;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.orbit.paletteProductNormal;
}, function (_ref5) {
  var theme = _ref5.theme,
      inverted = _ref5.inverted;
  return inverted ? theme.orbit.paletteWhiteHover : theme.orbit.paletteWhite;
});

MenuOpen.defaultProps = {
  theme: _Theme.themeDefault
};

var Separator = _styledComponents.default.div.withConfig({
  displayName: "SideNav__Separator",
  componentId: "i1ybzg-6"
})(["width:100%;border-top:1px dotted ", ";margin:24px 0;"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.orbit.paletteCloudNormal;
});

Separator.defaultProps = {
  theme: _Theme.themeDefault
};

var Link = _styledComponents.default.a.withConfig({
  displayName: "SideNav__Link",
  componentId: "i1ybzg-7"
})(["padding:10px 0;color:", ";cursor:pointer;&:link,&:visited{color:", ";}&:hover{color:", ";}"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.orbit.paletteInkNormal;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.orbit.paletteInkNormal;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.orbit.paletteProductNormal;
});

Link.defaultProps = {
  theme: _Theme.themeDefault
};

var _ref10 =
/*#__PURE__*/
React.createElement(_MenuHamburger.default, null);

var _ref11 =
/*#__PURE__*/
React.createElement(_Translate.default, {
  t: "common.hide"
});

var _ref12 =
/*#__PURE__*/
React.createElement(CloseIcon, null);

var _ref13 =
/*#__PURE__*/
React.createElement(Separator, null);

var _ref14 =
/*#__PURE__*/
React.createElement(CurrencySpacing, null, React.createElement(_Currency.default, {
  native: true
}));

var _ref15 =
/*#__PURE__*/
React.createElement(Separator, null);

var _ref17 =
/*#__PURE__*/
React.createElement(_Translate.default, {
  t: "account.log_out"
});

var _ref18 =
/*#__PURE__*/
React.createElement(_Translate.default, {
  t: "account.sign_in"
});

var _ref19 =
/*#__PURE__*/
React.createElement(_Translate.default, {
  t: "account.sign_up"
});

var _ref20 =
/*#__PURE__*/
React.createElement(Separator, null);

var _ref21 =
/*#__PURE__*/
React.createElement(_Translate.default, {
  t: "sidenav.connect"
});

var _ref22 =
/*#__PURE__*/
React.createElement(_Translate.default, {
  t: "common.subscribe"
});

var _ref24 =
/*#__PURE__*/
React.createElement(Separator, null);

var _ref25 =
/*#__PURE__*/
React.createElement(_Translate.default, {
  t: "sidenav.company"
});

var _ref26 =
/*#__PURE__*/
React.createElement(Separator, null);

var _ref27 =
/*#__PURE__*/
React.createElement(_Translate.default, {
  t: "content.pages.legal.title"
});

var _ref28 =
/*#__PURE__*/
React.createElement(_Translate.default, {
  t: "seo.content.title_cookies_settings"
});

var SideNav =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(SideNav, _React$Component);

  function SideNav() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, SideNav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(SideNav)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      modalOpen: MODALS.NONE
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleToggle", function () {
      var onSetModal = _this.props.onSetModal;
      var modalOpen = _this.state.modalOpen;

      if (modalOpen === MODALS.SIDE_NAV) {
        onSetModal(MODALS.NONE);

        _this.setState({
          modalOpen: MODALS.NONE
        });
      } else {
        onSetModal(MODALS.SIDE_NAV);

        _this.setState({
          modalOpen: MODALS.SIDE_NAV
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleOpenSignIn", function () {
      var onOpenModal = _this.props.onOpenModal;
      onOpenModal(MODALS.SIGN_IN);

      _this.setState({
        modalOpen: MODALS.NONE
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleOpenRegister", function () {
      var onOpenModal = _this.props.onOpenModal;
      onOpenModal(MODALS.REGISTER);

      _this.setState({
        modalOpen: MODALS.NONE
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleOpenSubscription", function () {
      var onSetModal = _this.props.onSetModal;
      onSetModal(MODALS.SUBSCRIPTION);

      _this.setState({
        modalOpen: MODALS.SUBSCRIPTION
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleOpenDebug", function () {
      var onSetModal = _this.props.onSetModal;
      onSetModal(MODALS.DEBUG);

      _this.setState({
        modalOpen: MODALS.DEBUG
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleCloseModal", function () {
      var onSetModal = _this.props.onSetModal;
      onSetModal(MODALS.NONE);

      _this.setState({
        modalOpen: MODALS.NONE
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "render", function () {
      var _this$props = _this.props,
          subscription = _this$props.subscription,
          debug = _this$props.debug,
          onSaveLanguage = _this$props.onSaveLanguage,
          portal = _this$props.portal,
          inverted = _this$props.inverted;
      var modalOpen = _this.state.modalOpen;
      return React.createElement(React.Fragment, null, React.createElement(MenuOpen, {
        "data-test": "NavBar-SideNav-Open",
        onClick: _this.handleToggle,
        inverted: inverted
      }, _ref10), React.createElement(_ClientOnly.default, null, React.createElement(_SideBar.default, {
        onClick: _this.handleToggle,
        shown: modalOpen === MODALS.SIDE_NAV
      }, React.createElement("section", {
        "data-test": "NavBar-SideNav"
      }, React.createElement(Close, {
        "data-test": "NavBar-SideNav-Close",
        onClick: _this.handleToggle
      }, _ref11, " ", _ref12), React.createElement(Content, null, debug && React.createElement(_MenuGroup.default, {
        text: "Dev features"
      }, React.createElement(_MenuItem.default, {
        Icon: _menu.icons.Settings,
        onClick: _this.handleOpenDebug,
        text: "Show debug window"
      })), _ref13, React.createElement(_Mobile.default, {
        display: "flex"
      }, React.createElement(_MenuGroup.default, null, React.createElement(_Language.default, {
        onChange: onSaveLanguage,
        native: true
      }), _ref14, _ref15)), React.createElement(_context2.Consumer, null, function (_ref16) {
        var auth = _ref16.auth,
            onSignOut = _ref16.onSignOut;
        return React.createElement(_MenuGroup.default, null, auth !== null ? React.createElement(_MenuItem.default, {
          Icon: _menu.icons.AccountCircle,
          onClick: function onClick() {
            onSignOut();

            _this.handleToggle();
          },
          text: _ref17
        }) : React.createElement(React.Fragment, null, React.createElement(_MenuItem.default, {
          Icon: _menu.icons.AccountCircle,
          onClick: _this.handleOpenSignIn,
          text: _ref18
        }), React.createElement(_MenuItem.default, {
          Icon: _menu.icons.AccountCircle,
          onClick: _this.handleOpenRegister,
          text: _ref19
        })));
      }), _ref20, React.createElement(_context.Consumer, null, function (brand) {
        var company = (0, _menu.getPagesItems)(brand);
        var socialMedia = (0, _menu.getSocialMediaItems)(brand);
        return React.createElement(React.Fragment, null, React.createElement(_MenuGroup.default, {
          text: _ref21
        }, company.invite && React.createElement(_BrandedMenuItem.default, {
          title: company.invite.title,
          Icon: company.invite.Icon,
          link: company.invite.link
        }), brand.communication.newsletter.enabled && React.createElement(_MenuItem.default, {
          Icon: _menu.icons.ContactEmail,
          onClick: _this.handleOpenSubscription,
          text: _ref22
        }), company.stories && React.createElement(_BrandedMenuItem.default, {
          title: company.stories.title,
          Icon: company.stories.Icon,
          link: company.stories.link
        }), React.createElement(MediaIcons, null, socialMedia.map(function (_ref23) {
          var link = _ref23.link,
              Icon = _ref23.Icon;
          return React.createElement(Link, {
            key: link,
            href: link,
            target: "_blank",
            rel: "noopener noreferrer"
          }, Icon && React.createElement(Icon, {
            className: "socialIcon"
          }));
        }))), _ref24, React.createElement(_MenuGroup.default, {
          text: _ref25
        }, company.about && React.createElement(_BrandedMenuItem.default, {
          title: company.about.title,
          Icon: company.about.Icon,
          link: company.about.link
        }), company.careers && React.createElement(_BrandedMenuItem.default, {
          title: company.careers.title,
          Icon: company.careers.Icon,
          link: company.careers.link
        }), brand.id === "kiwicom" && React.createElement(React.Fragment, null, React.createElement(_MenuItem.default, {
          Icon: _menu.icons.KiwicomCare,
          link: "https://care.kiwi.com/",
          text: "Care Kiwi.com"
        }), React.createElement(_MenuItem.default, {
          Icon: _menu.icons.Code,
          link: "https://code.kiwi.com/",
          text: "Code Kiwi.com"
        })), company.branding && React.createElement(_BrandedMenuItem.default, {
          title: company.branding.title,
          Icon: company.branding.Icon,
          link: company.branding.link
        }), company.guarantee && React.createElement(_BrandedMenuItem.default, {
          title: company.guarantee.title,
          Icon: company.guarantee.Icon,
          link: company.guarantee.link
        }), company.media && React.createElement(_BrandedMenuItem.default, {
          title: company.media.title,
          Icon: company.media.Icon,
          link: company.media.link
        })), _ref26, React.createElement(_MenuGroup.default, {
          text: _ref27
        }, company.terms && React.createElement(_BrandedMenuItem.default, {
          title: company.terms.title,
          Icon: company.terms.Icon,
          link: company.terms.link
        }), company.gdpr_terms && React.createElement(_BrandedMenuItem.default, {
          title: company.gdpr_terms.title,
          Icon: company.gdpr_terms.Icon,
          link: company.gdpr_terms.link
        }), company.privacy && React.createElement(_BrandedMenuItem.default, {
          title: company.privacy.title,
          Icon: company.privacy.Icon,
          link: company.privacy.link
        }), company.security && React.createElement(_BrandedMenuItem.default, {
          title: company.security.title,
          Icon: company.security.Icon,
          link: company.security.link
        }), React.createElement(_MenuItem.default, {
          text: _ref28,
          link: "/pages/cookies_settings",
          Icon: _menu.icons.Settings
        })));
      }))))), modalOpen === MODALS.SUBSCRIPTION && React.createElement(_Portal.default, {
        element: portal
      }, React.createElement(_Modal.default, {
        onClose: _this.handleCloseModal
      }, React.createElement(_ModalSection.default, null, subscription))), modalOpen === MODALS.DEBUG && React.createElement(_Portal.default, {
        element: portal
      }, React.createElement(_Modal.default, {
        onClose: _this.handleCloseModal
      }, React.createElement(_ModalSection.default, null, debug || null))));
    });
    return _this;
  }

  return SideNav;
}(React.Component);

exports.default = SideNav;
(0, _defineProperty2.default)(SideNav, "defaultProps", {
  debug: false
});