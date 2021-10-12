"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("dotenv-extended/config");

var _envBunyan = _interopRequireDefault(require("env-bunyan"));

var _mongoose = _interopRequireDefault(require("./config/mongoose"));

var _express = _interopRequireDefault(require("./config/express/express"));

(0, _asyncToGenerator2.default)(function* () {
  var app = (0, _express.default)();
  var {
    PORT
  } = process.env;
  yield (0, _mongoose.default)();
  yield app.listen(PORT);

  _envBunyan.default.info("Express listening on port ".concat(PORT));
})();