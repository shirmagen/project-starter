"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionOnStock = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _task = require("../task/task.service");

var _taskStatus = require("../../utils/task-status.enum");

var actionOnStock = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)(function* (_ref) {
    var {
      product,
      validator,
      actionText
    } = _ref;
    if (validator) validator({
      product
    });
    yield (0, _task.create)({
      action: actionText,
      product,
      location,
      status: _taskStatus.statuses.waiting
    });
  });

  return function actionOnStock(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.actionOnStock = actionOnStock;