"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Portal = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Portal"));

var _Modal = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Modal"));

var _ModalSection = _interopRequireDefault(require("@kiwicom/orbit-components/lib/Modal/ModalSection"));

var _context = require("../../services/modal/context");

var _context2 = require("../../services/brand/context");

var _context3 = require("../../services/auth/context");

var MODALS = _interopRequireWildcard(require("../../consts/modals"));

var _ValueBind = _interopRequireDefault(require("../ValueBind"));

var _CloseByKey = _interopRequireDefault(require("../CloseByKey"));

var _Container = _interopRequireDefault(require("./components/Container"));

var _MyBooking = _interopRequireDefault(require("./components/MyBooking"));

var _Register = _interopRequireDefault(require("./components/Register"));

var _SignIn = _interopRequireDefault(require("./components/SignIn"));

var _ForgotPassword = _interopRequireDefault(require("./components/ForgotPassword"));

var ModalsAuth = function ModalsAuth(_ref) {
  var portal = _ref.portal;
  return React.createElement(_context.Consumer, null, function (_ref2) {
    var value = _ref2.value,
        onChange = _ref2.onChange;
    return value !== MODALS.NONE && React.createElement(_context3.Consumer, null, function (auth) {
      return React.createElement(_ValueBind.default, {
        value: MODALS.NONE,
        onChange: onChange
      }, function (_ref3) {
        var onClick = _ref3.onClick;
        return React.createElement(_CloseByKey.default, {
          onClose: onClick
        }, React.createElement(_Portal.default, {
          element: portal
        }, React.createElement(_Modal.default, {
          onClose: onClick
        }, React.createElement(_ModalSection.default, null, value === MODALS.MY_BOOKING && React.createElement(_Container.default, {
          value: value,
          onChange: onChange
        }, React.createElement(_MyBooking.default, {
          loading: auth.loading,
          onMyBooking: auth.onMyBooking,
          onChange: onChange
        })), value === MODALS.REGISTER && React.createElement(_Container.default, {
          value: value,
          onChange: onChange
        }, React.createElement(_Register.default, {
          loading: auth.loading,
          onRegister: auth.onRegister,
          onChange: onChange
        })), value === MODALS.SIGN_IN && React.createElement(_Container.default, {
          value: value,
          onChange: onChange
        }, React.createElement(_SignIn.default, {
          loading: auth.loading,
          onSignIn: auth.onSignIn,
          onChange: onChange
        })), value === MODALS.FORGOT_PASSWORD && React.createElement(_context2.Consumer, null, function (brand) {
          return React.createElement(_ForgotPassword.default, {
            brandId: brand.id,
            onClose: onClick
          });
        })))));
      });
    });
  });
};

var _default = ModalsAuth;
exports.default = _default;