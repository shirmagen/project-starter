"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAll = exports.create = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _lodash = _interopRequireDefault(require("lodash"));

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _example = _interopRequireDefault(require("./example.model"));

var create = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)(function* (_ref, res, next) {
    var {
      headers,
      body
    } = _ref;
    var {
      user
    } = headers;
    var {
      date
    } = body;
    var example = yield Post.create({
      date,
      user
    });

    if (!example) {
      throw (0, _httpErrors.default)(400);
    }

    res.send(example);
    next(); // or return example if there is no next
  });

  return function create(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.create = create;

var getAll = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    var examples = yield _example.default.find();
    res.send(examples);
    next(); // or return example if there is no next
  });

  return function getAll(_x4, _x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getAll = getAll;