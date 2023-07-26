"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _immutable = require("immutable");

var _getIn = _interopRequireDefault(require("./getIn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var structure = {
  fromJS: _immutable.fromJS,
  getIn: _getIn["default"],
  merge: function merge(state, payload) {
    return state.merge(payload);
  },
  toJS: function toJS(value) {
    return _immutable.Iterable.isIterable(value) || _immutable.Record.isRecord(value) ? value.toJS() : value;
  }
};
var _default = structure;
exports["default"] = _default;