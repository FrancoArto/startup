class EventEmitter {
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

var social = {
  share(friendName) {return friendName + ` shares ${this.title}`;},
  like(friendName) {return friendName + ` likes ${this.title}`;}
}

class Movie extends EventEmitter {

  constructor(title, year, duration) {
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
    Object.assign(this, social); //Assigning the 'social' mixin to all movies
  }
  
  play() {this.emit('Play')}

  pause() {this.emit('Pause')}

  resume() {this.emit('Resume')}

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

class Actor {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Logger {

  constructor() {}

  log(info) {
    console.log(info);
  }
}



//Instantiating Movies, trying methods and logging them on console
var logger =  new Logger();

var pulpFiction = new Movie('Pulp Fiction', 1994, 178);
pulpFiction.on('Play', callback => {logger.log('The Play method has been emitted')});

console.log(pulpFiction);
pulpFiction.play();


var enterTheVoid = new Movie('Enter the Void', 2009, 161);
enterTheVoid.on('Play', callback => {logger.log('The Play method has been emitted')});

console.log(enterTheVoid);
enterTheVoid.play();

var actor = new Actor('John Travolta', 59);
var cast = [
  new Actor('Leonardo Di Caprio', 57),
  new Actor('Christoph Waltz', 68),
  new Actor('Kerry Washington', 39)
];

pulpFiction.addCast(actor);
logger.log(pulpFiction.cast);

enterTheVoid.addCast(cast);
logger.log(enterTheVoid.cast);

//Social mixin
logger.log(pulpFiction.like('Franco'));
logger.log(enterTheVoid.share('Agustin'));
