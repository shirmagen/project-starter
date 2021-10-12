"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _envBunyan = _interopRequireDefault(require("env-bunyan"));

var _default = /*#__PURE__*/(0, _asyncToGenerator2.default)(function* () {
  try {
    yield _mongoose.default.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });

    _envBunyan.default.info('Connected to MongoDB');
  } catch (error) {
    console.log('mongo error is', error);

    _envBunyan.default.error('Failed connecting to MongoDB');
  }

  _mongoose.default.connection.on('error', err => {
    _envBunyan.default.info(err);
  });
});

exports.default = _default;