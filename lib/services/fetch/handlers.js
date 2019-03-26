"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleError = handleError;
exports.handleJSON = handleJSON;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function handleError(_x) {
  return _handleError.apply(this, arguments);
}

function _handleError() {
  _handleError = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(res) {
    var data;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (res.ok) {
              _context.next = 5;
              break;
            }

            _context.next = 3;
            return res.json();

          case 3:
            data = _context.sent;
            return _context.abrupt("return", Promise.reject(new Error("Fetch: ".concat(res.status, " ").concat(res.statusText, ". Data: ").concat(JSON.stringify(data, null, "  ")))));

          case 5:
            return _context.abrupt("return", res);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _handleError.apply(this, arguments);
}

function handleJSON(_x2) {
  return _handleJSON.apply(this, arguments);
}

function _handleJSON() {
  _handleJSON = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(res) {
    var data;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return handleError(res).then(function (r) {
              return r.json();
            });

          case 2:
            data = _context2.sent;

            if (!data.error_code) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", Promise.reject(new Error("Fetch: ".concat(data.message, ". Data: ").concat(JSON.stringify(data, null, "  ")))));

          case 5:
            return _context2.abrupt("return", data);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _handleJSON.apply(this, arguments);
}