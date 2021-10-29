"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HealthCheckUseCase = void 0;

class HealthCheckUseCase {
  constructor() {}

  execute() {
    return {
      isWorking: 'WORKING'
    };
  }

}

exports.HealthCheckUseCase = HealthCheckUseCase;