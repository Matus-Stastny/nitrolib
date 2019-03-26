"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOGIN_PATH_FULFILLED = exports.LOGIN_ABANDONED = exports.REGISTRATION_SENT = exports.CONTINUE_WITH_REGISTER = exports.LOGIN_VIA_SOCIAL = exports.CHANGE_EMAIL = exports.MAGIC_LINK_SENT = exports.ASK_FOR_MAGIC_LINK = exports.LOGGED_WITH_ACCOUNT = exports.SCREEN_CHANGED = exports.MAGIC_LOGIN_MODAL_SHOWN = void 0;
var MAGIC_LOGIN_MODAL_SHOWN = {
  category: "Nitro",
  subCategory: "MagicLogin",
  action: "ModalShown",
  destinations: {
    exponea: true,
    ga: false,
    logmole: false
  }
};
exports.MAGIC_LOGIN_MODAL_SHOWN = MAGIC_LOGIN_MODAL_SHOWN;
var SCREEN_CHANGED = {
  category: "Nitro",
  subCategory: "MagicLogin",
  action: "ScreenChanged",
  destinations: {
    exponea: true,
    ga: false,
    logmole: false
  }
};
exports.SCREEN_CHANGED = SCREEN_CHANGED;
var LOGGED_WITH_ACCOUNT = {
  category: "Nitro",
  subCategory: "MagicLogin",
  action: "LoggedInWithAccount",
  destinations: {
    exponea: true,
    ga: false,
    logmole: false
  }
};
exports.LOGGED_WITH_ACCOUNT = LOGGED_WITH_ACCOUNT;
var ASK_FOR_MAGIC_LINK = {
  category: "Nitro",
  subCategory: "MagicLogin",
  action: "AskForMagicLink",
  destinations: {
    exponea: true,
    ga: false,
    logmole: false
  }
};
exports.ASK_FOR_MAGIC_LINK = ASK_FOR_MAGIC_LINK;
var MAGIC_LINK_SENT = {
  category: "Nitro",
  subCategory: "MagicLogin",
  action: "MagicLinkSent",
  destinations: {
    exponea: true,
    ga: false,
    logmole: false
  }
};
exports.MAGIC_LINK_SENT = MAGIC_LINK_SENT;
var CHANGE_EMAIL = {
  category: "Nitro",
  subCategory: "MagicLogin",
  action: "ChangeEmail",
  destinations: {
    exponea: true,
    ga: false,
    logmole: false
  }
};
exports.CHANGE_EMAIL = CHANGE_EMAIL;
var LOGIN_VIA_SOCIAL = {
  category: "Nitro",
  subCategory: "MagicLogin",
  action: "LoginViaSocialProvider",
  destinations: {
    exponea: true,
    ga: false,
    logmole: false
  }
};
exports.LOGIN_VIA_SOCIAL = LOGIN_VIA_SOCIAL;
var CONTINUE_WITH_REGISTER = {
  category: "Nitro",
  subCategory: "MagicLogin",
  action: "ContinueWithRegister",
  destinations: {
    exponea: true,
    ga: false,
    logmole: false
  }
};
exports.CONTINUE_WITH_REGISTER = CONTINUE_WITH_REGISTER;
var REGISTRATION_SENT = {
  category: "Nitro",
  subCategory: "MagicLogin",
  action: "RegistrationSent",
  destinations: {
    exponea: true,
    ga: false,
    logmole: false
  }
};
exports.REGISTRATION_SENT = REGISTRATION_SENT;
var LOGIN_ABANDONED = {
  category: "Nitro",
  subCategory: "MagicLogin",
  action: "LoginAbandoned",
  destinations: {
    exponea: true,
    ga: false,
    logmole: false
  }
};
exports.LOGIN_ABANDONED = LOGIN_ABANDONED;
var LOGIN_PATH_FULFILLED = {
  category: "Nitro",
  subCategory: "MagicLogin",
  action: "LoginPathFulfilled",
  destinations: {
    exponea: true,
    ga: false,
    logmole: false
  }
};
exports.LOGIN_PATH_FULFILLED = LOGIN_PATH_FULFILLED;