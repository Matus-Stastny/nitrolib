"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeSession = exports.saveSession = exports.loadSession = exports.remove = exports.save = exports.load = void 0;

var available = function available() {
  return "localStorage" in window;
};

var availableSession = function availableSession() {
  return "sessionStorage" in window;
};

var load = function load(key) {
  return available() ? window.localStorage.getItem(key) : null;
};

exports.load = load;

var save = function save(key, value) {
  if (available()) {
    try {
      window.localStorage.setItem(key, value);
    } catch (e) {// Pass
    }
  }
};

exports.save = save;

var remove = function remove(key) {
  if (available()) {
    window.localStorage.removeItem(key);
  }
};

exports.remove = remove;

var loadSession = function loadSession(key) {
  return availableSession() ? window.sessionStorage.getItem(key) : null;
};

exports.loadSession = loadSession;

var saveSession = function saveSession(key, value) {
  if (availableSession()) {
    try {
      window.sessionStorage.setItem(key, value);
    } catch (e) {// Pass
    }
  }
};

exports.saveSession = saveSession;

var removeSession = function removeSession(key) {
  if (availableSession()) {
    window.sessionStorage.removeItem(key);
  }
};

exports.removeSession = removeSession;