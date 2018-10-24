"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

var _eventEmitter = _interopRequireDefault(require("../eventEmitter/eventEmitter.js"));

var _social = _interopRequireDefault(require("../social/social.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

!'use strict';

class Movie extends _eventEmitter.default {
  constructor(title, year, duration) {
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
    Object.assign(this, _social.default); //Assigning the 'social' mixin to all movies
  }

  play() {
    this.emit('Play');
  }

  pause() {
    this.emit('Pause');
  }

  resume() {
    this.emit('Resume');
  }

  addCast(cast) {
    if (!this.cast) {
      this.cast = [];
    }

    if (Array.isArray(cast)) {
      cast.forEach(actor => {
        this.cast.push(actor);
      });
    } else {
      this.cast.push(cast);
    }
  }

}

exports.default = Movie;