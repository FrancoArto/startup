!'use strict';

export default class EventEmitter {
  constructor() {
    this.events = {}
  }

  on(eventName, callback) {
    if(!this.events[eventName]) {
      this.events[eventName] = []; //Creates the event's listeners array
    }
    this.events[eventName].push(callback); //Adds the listener function to the event's listeners array
  }

  emit(eventName) {
    const event = this.events[eventName];
    if(event) {
      event.forEach(callback => { //Calling every function in the event's listeners array
       callback.call(this);
      });
    }
  }

  off(eventName, callback) {
    if(this.events[eventName]) {
      this.events[eventName].delete(callback); //Removes the desired listener function
    }
  }
}
