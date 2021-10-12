"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressAsyncRouter = require("express-async-router");

var _example = require("./example.controller");

var router = new _expressAsyncRouter.AsyncRouter();
router.get('/', _example.getAll);
router.post('/', _example.create);
var _default = router;
exports.default = _default;