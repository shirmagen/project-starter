"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _envBunyan = _interopRequireDefault(require("env-bunyan"));

var _expressMongooseErrors = _interopRequireDefault(require("express-mongoose-errors"));

var _expressJsonErrorHandler = _interopRequireDefault(require("express-json-error-handler"));

var _routes = _interopRequireDefault(require("./routes"));

var _default = () => {
  var app = (0, _express.default)();
  app.use(_express.default.urlencoded({
    extended: false
  }));
  app.use((0, _bodyParser.json)());
  (0, _routes.default)(app);
  app.use((0, _expressMongooseErrors.default)());
  app.use((0, _expressJsonErrorHandler.default)({
    log(_ref) {
      var {
        err,
        req,
        res
      } = _ref;

      _envBunyan.default.error({
        err,
        req,
        res
      });
    }

  }));
  return app;
};

exports.default = _default;