"use strict";

var _api = _interopRequireDefault(require("./api/api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const port = process.env.PORT || '3003';

_api.default.listen(port, () => console.log('💻 Server started'));