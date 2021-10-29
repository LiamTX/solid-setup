"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _healthCheck = require("./healthCheck");

Object.keys(_healthCheck).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _healthCheck[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _healthCheck[key];
    }
  });
});