!'use strict';

import EventEmitter from '../eventEmitter/eventEmitter.js';
import social from '../social/social.js';


export default class Movie extends EventEmitter {  

  constructor(title, year, duration) {
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
    Object.assign(this, social); //Assigning the 'social' mixin to all movies
  }
  
  play() {this.emit('Play');}

  pause() {this.emit('Pause');}

  resume() {this.emit('Resume');}

  addCast(cast) {
    if(!this.cast) {
      this.cast = [];
    }

    if(Array.isArray(cast)) {
      cast.forEach(actor => {
        this.cast.push(actor);
      });
    }
    else {
      this.cast.push(cast);
    }   
  }
}
