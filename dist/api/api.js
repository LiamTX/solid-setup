"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("./routes/routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Api {
  constructor() {
    _defineProperty(this, "express", void 0);

    this.express = (0, _express.default)();
    this.middlewares();
  }

  middlewares() {
    this.express.use((0, _cors.default)());
    this.express.use(_express.default.json());

    _dotenv.default.config();

    this.express.use('/api', _routes.default);
  }

}

var _default = new Api().express;
exports.default = _default;