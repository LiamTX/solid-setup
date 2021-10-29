"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HealthCheckController = void 0;

var _httpErrors = _interopRequireDefault(require("http-errors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HealthCheckController {
  constructor(healthCheckUseCase) {
    this.healthCheckUseCase = healthCheckUseCase;
  }

  async handle(req, res) {
    try {
      return res.json(this.healthCheckUseCase.execute());
    } catch (error) {
      const {
        status,
        message
      } = error;
      (0, _httpErrors.default)(status ? status : 500, message ? message : 'Internal server error');
    }
  }

}

exports.HealthCheckController = HealthCheckController;