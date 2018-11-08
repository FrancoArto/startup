"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
!'use strict';
var social = {
  share(friendName) {
    return friendName + ` shares ${this.title}`;
  },

  like(friendName) {
    return friendName + ` likes ${this.title}`;
  }

};
var _default = social;
exports.default = _default;