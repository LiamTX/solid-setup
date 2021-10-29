"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _useCases = require("../../useCases");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Routes {
  constructor() {
    _defineProperty(this, "router", void 0);

    this.router = _express.default.Router();
    this.setApiRoutes();
  }

  setApiRoutes() {
    this.router.get('/healthcheck', async (req, res) => _useCases.healthCheckController.handle(req, res));
  }

}

var _default = new Routes().router;
exports.default = _default;