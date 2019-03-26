"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Linkedin = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Linkedin"));

var _Twitter = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Twitter"));

var _Instagram = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Instagram"));

var _Facebook = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Facebook"));

var _mediaQuery = _interopRequireDefault(require("@kiwicom/orbit-components/lib/utils/mediaQuery"));

var _Text = _interopRequireDefault(require("../Text"));

var _context = require("../../services/intl/context");

var _Theme = require("../../records/Theme");

var _LogoSvg = _interopRequireDefault(require("./components/LogoSvg"));

var _menu = require("./services/menu");

var ICONS = [{
  id: "ig",
  component: React.createElement(_Instagram.default, {
    color: "tertiary"
  }),
  url: "https://www.instagram.com/kiwicom247/"
}, {
  id: "tw",
  component: React.createElement(_Twitter.default, {
    color: "tertiary"
  }),
  url: "https://twitter.com/kiwicom247/"
}, {
  id: "li",
  component: React.createElement(_Linkedin.default, {
    color: "tertiary"
  }),
  url: "https://www.linkedin.com/company/Kiwi.com/"
}, {
  id: "fb",
  component: React.createElement(_Facebook.default, {
    color: "tertiary"
  }),
  url: "https://www.facebook.com/kiwicom247/"
}];

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "Footer__Wrapper",
  componentId: "khmrgk-0"
})(["", ";"], function (_ref) {
  var theme = _ref.theme;
  return (0, _styledComponents.css)(["display:flex;flex-direction:column;align-items:center;background-color:", ";border-top:2px solid ", ";padding:", ";", ";"], theme.orbit.paletteWhite, theme.orbit.paletteCloudLight, theme.orbit.spaceLarge, _mediaQuery.default.tablet((0, _styledComponents.css)(["flex-direction:row;padding:40px 50px;"])));
});

Wrapper.defaultProps = {
  theme: _Theme.themeDefault
};

var LogoWrapper = _styledComponents.default.div.withConfig({
  displayName: "Footer__LogoWrapper",
  componentId: "khmrgk-1"
})(["margin:0 0 40px 0;", ";"], _mediaQuery.default.tablet((0, _styledComponents.css)(["margin:0 50px 0 0;"])));

var Logo = (0, _styledComponents.default)(_LogoSvg.default).withConfig({
  displayName: "Footer__Logo",
  componentId: "khmrgk-2"
})(["vertical-align:middle;"]);

var LinksAndIconsWrapper = _styledComponents.default.div.withConfig({
  displayName: "Footer__LinksAndIconsWrapper",
  componentId: "khmrgk-3"
})(["display:flex;flex-grow:1;flex-direction:column;align-items:center;", ";", ";"], _mediaQuery.default.tablet((0, _styledComponents.css)(["align-items:flex-end;"])), _mediaQuery.default.desktop((0, _styledComponents.css)(["flex-direction:row;align-items:center;"])));

var LinksWrapper = _styledComponents.default.div.withConfig({
  displayName: "Footer__LinksWrapper",
  componentId: "khmrgk-4"
})(["display:flex;flex-direction:column;align-items:center;margin-bottom:40px;margin-top:24px;", ";", ";"], _mediaQuery.default.tablet((0, _styledComponents.css)(["margin:0;flex-direction:row;"])), _mediaQuery.default.desktop((0, _styledComponents.css)(["margin-top:0;"])));

var Link = _styledComponents.default.a.withConfig({
  displayName: "Footer__Link",
  componentId: "khmrgk-5"
})(["text-decoration:none;&:not(:last-child){margin-bottom:", ";}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.orbit.spaceLarge;
});

Link.defaultProps = {
  theme: _Theme.themeDefault
};

var Icons = _styledComponents.default.div.withConfig({
  displayName: "Footer__Icons",
  componentId: "khmrgk-6"
})(["margin-left:auto;order:-1;", ";"], _mediaQuery.default.desktop((0, _styledComponents.css)(["order:initial;"])));

var IconsLink = _styledComponents.default.a.withConfig({
  displayName: "Footer__IconsLink",
  componentId: "khmrgk-7"
})([":not(:last-child){margin-right:", ";}"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.orbit.spaceLarge;
});

IconsLink.defaultProps = {
  theme: _Theme.themeDefault
};

var _ref5 =
/*#__PURE__*/
React.createElement(Logo, null);

var Footer = function Footer() {
  return React.createElement(_context.Consumer, null, function (_ref4) {
    var language = _ref4.language;
    return React.createElement(Wrapper, null, React.createElement(LogoWrapper, null, React.createElement("a", {
      href: "https://www.kiwi.com/".concat(language.id, "/")
    }, _ref5)), React.createElement(LinksAndIconsWrapper, null, React.createElement(LinksWrapper, null, (0, _menu.getLinks)(language.id).map(function (link) {
      return React.createElement(Link, {
        href: link.url,
        key: link.id,
        target: "_blank",
        rel: "noopener noreferrer"
      }, React.createElement(_Text.default, {
        t: link.title,
        type: "secondary"
      }));
    })), React.createElement(Icons, null, ICONS.map(function (icon) {
      return React.createElement(IconsLink, {
        href: icon.url,
        key: icon.id,
        target: "_blank",
        rel: "noopener noreferrer"
      }, icon.component);
    }))));
  });
};

var _default = Footer;
exports.default = _default;