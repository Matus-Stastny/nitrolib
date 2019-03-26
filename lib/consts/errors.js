"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var errors = {
  requiredField: "forms.errors.is_required",
  accountExists: "account.login_already_exists",
  weakPassword: "account.password_too_simple",
  invalidEmail: "account.wrong_format_email",
  loginFailed: "account.login_failed",
  passwordMismatch: "account.password_confirm_not_matching",
  general: "common.api_error"
};
var _default = errors;
exports.default = _default;