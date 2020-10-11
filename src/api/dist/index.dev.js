"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListUsers = ListUsers;

var _httpService = _interopRequireDefault(require("../services/httpService"));

var _constants = require("../config/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @format */
function ListUsers(pageNumber) {
  return regeneratorRuntime.async(function ListUsers$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", _httpService["default"].get("".concat(_constants.API, "/users?page=").concat(pageNumber), {}));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}