"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTokenUser = getTokenUser;
exports.getMyBookingToken = getMyBookingToken;
exports.signIn = signIn;
exports.logout = logout;
exports.register = register;
exports.socialAuth = socialAuth;
exports.resetPassword = resetPassword;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("isomorphic-fetch");

var _format = _interopRequireDefault(require("date-fns/format"));

var _querystring = _interopRequireDefault(require("querystring"));

var _btoaLite = _interopRequireDefault(require("btoa-lite"));

var _User = require("../../records/User");

var _config = _interopRequireDefault(require("../../consts/config"));

var _handlers = require("../fetch/handlers");

var _headers = require("../fetch/headers");

var _getOAuthRedirectUrl = _interopRequireDefault(require("./services/getOAuthRedirectUrl"));

// noinspection SpellCheckingInspection
var USER = "5433ecccaff67";

var makeAuthHeader = function makeAuthHeader(token) {
  return "Basic ".concat((0, _btoaLite.default)("".concat(USER, ":").concat(token)));
};

function getTokenUser(_x) {
  return _getTokenUser.apply(this, arguments);
}

function _getTokenUser() {
  _getTokenUser = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(token) {
    var user;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("".concat(_config.default.apiAuthUrl, "/v1/user.get"), {
              method: "POST",
              headers: (0, _objectSpread2.default)({}, _headers.JSON_BOTH, {
                Authorization: makeAuthHeader(token)
              }),
              body: JSON.stringify({
                user: "self"
              })
            }).then(_handlers.handleJSON).catch(function () {
              return Promise.reject(new Error("API error when retrieving user"));
            });

          case 2:
            user = _context.sent;

            if (user) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", Promise.reject(new Error("API error when retrieving user")));

          case 5:
            return _context.abrupt("return", (0, _User.mapUser)(user[0]));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _getTokenUser.apply(this, arguments);
}

// eslint-disable-next-line import/prefer-default-export
function getMyBookingToken(_ref) {
  var bid = _ref.bid,
      email = _ref.email,
      iata = _ref.iata,
      departure = _ref.departure;
  var query = {
    email: email,
    src: iata,
    dtime: (0, _format.default)(departure, _config.default.apiDateFormat, {
      awareOfUnicodeTokens: true
    })
  };
  return fetch("".concat(_config.default.bookingApiUrl, "/api/v0.1/users/get_simple_token/").concat(bid, "?").concat(_querystring.default.stringify(query))).then(function (res) {
    if (!res.ok) {
      return res.json().then(function (body) {
        return Promise.reject(body.msg);
      });
    }

    return res.json().then(function (body) {
      return body.simple_token;
    });
  });
}

function signIn(_x2) {
  return _signIn.apply(this, arguments);
}

function _signIn() {
  _signIn = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(input) {
    var res, user;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("".concat(_config.default.apiAuthUrl, "/v1/user.login"), {
              method: "POST",
              headers: (0, _objectSpread2.default)({}, _headers.JSON_BOTH, {
                Authorization: makeAuthHeader("")
              }),
              body: JSON.stringify({
                login: input.email,
                password: input.password,
                brand: input.brand
              })
            }).then(_handlers.handleJSON);

          case 2:
            res = _context2.sent;

            if (!(res.locks && res.locks.length > 0)) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", Promise.reject(new Error("User is locked")));

          case 5:
            _context2.next = 7;
            return getTokenUser(res.token);

          case 7:
            user = _context2.sent;
            return _context2.abrupt("return", {
              type: "user",
              user: user,
              token: res.token
            });

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _signIn.apply(this, arguments);
}

function logout(_x3) {
  return _logout.apply(this, arguments);
}

function _logout() {
  _logout = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(token) {
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", fetch("".concat(_config.default.apiAuthUrl, "/v1/user.logout"), {
              method: "POST",
              headers: (0, _objectSpread2.default)({}, _headers.JSON_BOTH, {
                Authorization: makeAuthHeader(token)
              }),
              body: JSON.stringify(token)
            }).then(_handlers.handleError).then(function () {}));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _logout.apply(this, arguments);
}

function register(brand, input) {
  return fetch("".concat(_config.default.apiAuthUrl, "/v1/user.save"), {
    method: "POST",
    headers: (0, _objectSpread2.default)({}, _headers.JSON_BOTH, {
      Authorization: makeAuthHeader("")
    }),
    body: JSON.stringify({
      email: input.email,
      first_name: input.firstName,
      last_name: input.lastName,
      login: input.email,
      password: input.password,
      brand: brand
    })
  }).then(_handlers.handleError).then(function () {});
}

function socialAuth(_x4, _x5) {
  return _socialAuth.apply(this, arguments);
}

function _socialAuth() {
  _socialAuth = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(provider, url) {
    var res;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return fetch("".concat(_config.default.apiAuthUrl, "/v1/oauth.getAuthorizationUrl"), {
              method: "POST",
              headers: _headers.JSON_BOTH,
              body: JSON.stringify({
                provider_id: provider,
                app_id: _config.default.userAppAppId,
                redirect_url: (0, _getOAuthRedirectUrl.default)(url)
              })
            }).then(_handlers.handleJSON);

          case 2:
            res = _context4.sent;
            return _context4.abrupt("return", res.authorization_url);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _socialAuth.apply(this, arguments);
}

function resetPassword(email, brandId) {
  return fetch("".concat(_config.default.apiAuthUrl, "/v1/user.resetPassword"), {
    method: "POST",
    headers: (0, _objectSpread2.default)({}, _headers.JSON_BOTH, {
      Authorization: makeAuthHeader("")
    }),
    body: JSON.stringify({
      login: email,
      brand: brandId
    })
  }).then(_handlers.handleJSON);
}