"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _example = _interopRequireDefault(require("../../api/example"));

var _default = app => {
  app.use('/api/example', _example.default);
  app.route('/:url(api)/*').get((req, res, next) => {
    next((0, _httpErrors.default)(404));
  });
};

exports.default = _default;