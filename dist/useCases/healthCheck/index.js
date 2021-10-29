"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.healthCheckController = void 0;

var _HealthCheckController = require("./HealthCheckController");

var _HealthCheckUseCase = require("./HealthCheckUseCase");

const healthCheckUseCase = new _HealthCheckUseCase.HealthCheckUseCase();
const healthCheckController = new _HealthCheckController.HealthCheckController(healthCheckUseCase);
exports.healthCheckController = healthCheckController;