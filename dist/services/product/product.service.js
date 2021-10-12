"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProductFromTask = exports.update = exports.getByName = exports.getAll = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _stockActions = require("../../utils/stock-actions");

var _product = _interopRequireDefault(require("./product.model"));

var getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)(function* () {
    return _product.default.find({});
  });

  return function getAll() {
    return _ref.apply(this, arguments);
  };
}();

exports.getAll = getAll;

var update = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)(function* (_ref2) {
    var {
      name,
      changeInAmount
    } = _ref2;
    var result = yield _product.default.findOneAndUpdate({
      name
    }, {
      $inc: {
        amount: changeInAmount
      }
    });

    if (!result) {
      throw (0, _httpErrors.default)(404, "Product named ".concat(name, " does not exist"));
    }

    return result;
  });

  return function update(_x) {
    return _ref3.apply(this, arguments);
  };
}();

exports.update = update;

var getByName = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2.default)(function* (_ref4) {
    var {
      name
    } = _ref4;
    var result = yield _product.default.findOne({
      name
    });

    if (!result) {
      throw (0, _httpErrors.default)(404, "Product named ".concat(name, " does not exist"));
    }

    return result;
  });

  return function getByName(_x2) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getByName = getByName;

var updateProductFromTask = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2.default)(function* (_ref6) {
    var {
      action,
      product
    } = _ref6;

    if (action === _stockActions.actions.order) {
      yield update({
        name: product,
        changeInAmount: -1
      });
    }

    if (action === _stockActions.actions.supply) {
      yield update({
        name: product,
        changeInAmount: 1
      });
    }
  });

  return function updateProductFromTask(_x3) {
    return _ref7.apply(this, arguments);
  };
}();

exports.updateProductFromTask = updateProductFromTask;