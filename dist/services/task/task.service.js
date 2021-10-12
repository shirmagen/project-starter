"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getById = exports.create = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _task = _interopRequireDefault(require("../../api/task/task.model"));

var create = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)(function* (_ref) {
    var {
      action,
      product,
      location,
      status
    } = _ref;
    var result = yield _task.default.create({
      action,
      product,
      location,
      status
    });

    if (!result) {
      throw createError(400);
    }

    return result;
  });

  return function create(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.create = create;

var getById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)(function* (id) {
    var task = yield _task.default.getById(id);

    if (!task) {
      throw createError(404, "Task ".concat(id, " does not exist"));
    }

    return task;
  });

  return function getById(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getById = getById;