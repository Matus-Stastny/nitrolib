"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.save = exports.load = void 0;

var available = function available() {
  return "localStorage" in window;
};

var load = function load(key) {
  return available() ? localStorage.getItem(key) : null;
};

exports.load = load;

var save = function save(key, value) {
  if (available()) {
    localStorage.setItem(key, value);
  }
};

exports.save = save;

var remove = function remove(key) {
  if (available()) {
    localStorage.removeItem(key);
  }
};

exports.remove = remove;