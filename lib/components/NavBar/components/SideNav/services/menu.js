"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSocialMediaItems = exports.getPagesItems = exports.icons = void 0;

var _values2 = _interopRequireDefault(require("ramda/src/values"));

var _prop2 = _interopRequireDefault(require("ramda/src/prop"));

var _filter2 = _interopRequireDefault(require("ramda/src/filter"));

var _merge2 = _interopRequireDefault(require("ramda/src/merge"));

var _mapObjIndexed2 = _interopRequireDefault(require("ramda/src/mapObjIndexed"));

var _compose2 = _interopRequireDefault(require("ramda/src/compose"));

var React = _interopRequireWildcard(require("react"));

var _AccountCircle = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/AccountCircle"));

var _Deals = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Deals"));

var _ContactEmail = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/ContactEmail"));

var _StarFull = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/StarFull"));

var _Trip = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Trip"));

var _City = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/City"));

var _Kiwicom = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Kiwicom"));

var _KiwicomCare = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/KiwicomCare"));

var _KiwicomGuarantee = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/KiwicomGuarantee"));

var _Code = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Code"));

var _Suitcase = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Suitcase"));

var _TermsAndConditions = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/TermsAndConditions"));

var _Settings = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Settings"));

var _Security = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Security"));

var _Facebook = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Facebook"));

var _Instagram = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Instagram"));

var _Twitter = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Twitter"));

var _Linkedin = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Linkedin"));

var _Chat = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Chat"));

var _Exchange = _interopRequireDefault(require("@kiwicom/orbit-components/lib/icons/Exchange"));

var icons = {
  AccountCircle: _AccountCircle.default,
  Deals: _Deals.default,
  ContactEmail: _ContactEmail.default,
  Facebook: _Facebook.default,
  Instagram: _Instagram.default,
  StarFull: _StarFull.default,
  Kiwicom: _Kiwicom.default,
  KiwicomCare: _KiwicomCare.default,
  KiwicomGuarantee: _KiwicomGuarantee.default,
  Code: _Code.default,
  Suitcase: _Suitcase.default,
  TermsAndConditions: _TermsAndConditions.default,
  Security: _Security.default,
  City: _City.default,
  Twitter: _Twitter.default,
  Linkedin: _Linkedin.default,
  Trip: _Trip.default,
  Settings: _Settings.default,
  Chat: _Chat.default,
  Exchange: _Exchange.default
};
exports.icons = icons;
var companyPagesUI = {
  branding: {
    title: "content.branding",
    Icon: icons.Kiwicom
  },
  stories: {
    title: "content.stories",
    Icon: icons.Trip
  },
  security: {
    title: "content.pages.security_title",
    Icon: icons.Security
  },
  about: {
    title: "content.pages.about.title",
    Icon: icons.City
  },
  terms: {
    title: "content.pages.legal.title",
    Icon: icons.TermsAndConditions
  },
  gdpr_terms: {
    title: "content.pages.terms.title",
    Icon: icons.TermsAndConditions
  },
  guarantee: {
    title: "content.pages.guarantee.title",
    Icon: icons.KiwicomGuarantee
  },
  privacy: {
    title: "content.pages.privacy.title",
    Icon: icons.Security
  },
  careers: {
    title: "content.pages.careers.title",
    Icon: icons.Suitcase
  },
  media: {
    title: "content.pages_v2.media.press_kit",
    Icon: icons.Kiwicom
  },
  invite: {
    title: "pages.buddy.landing.title",
    Icon: icons.Deals
  }
};

var getPagesItems = function getPagesItems(brand) {
  return (0, _compose2.default)((0, _mapObjIndexed2.default)(function (val, key) {
    return (0, _merge2.default)(val, companyPagesUI[key]);
  }), (0, _filter2.default)((0, _prop2.default)("enabled")) // $FlowExpected: some props are missing in certain objects
  )(brand.content.pages);
};

exports.getPagesItems = getPagesItems;
var socialPagesUI = {
  instagram: {
    type: "instagram",
    Icon: icons.Instagram
  },
  twitter: {
    type: "twitter",
    Icon: icons.Twitter
  },
  youtube: {
    type: "youtube",
    Icon: icons.Kiwicom
  },
  linkedin: {
    type: "linkedin",
    Icon: icons.Linkedin
  },
  blog: {
    type: "blog",
    Icon: icons.Kiwicom
  },
  facebook: {
    type: "facebook",
    Icon: icons.Facebook
  }
};

var getSocialMediaItems = function getSocialMediaItems(brand) {
  return (0, _compose2.default)(_values2.default, (0, _mapObjIndexed2.default)(function (val, key) {
    return (0, _merge2.default)(val, socialPagesUI[key]);
  }), (0, _filter2.default)((0, _prop2.default)("enabled")) // $FlowExpected: some props are missing in certain objects
  )(brand.content.media);
};

exports.getSocialMediaItems = getSocialMediaItems;