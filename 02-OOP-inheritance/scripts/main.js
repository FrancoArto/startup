class EventEmitter{
  constructor(){
    this.events = {}
  }

  on(eventName, callback){
    if(!this.events[eventName]){
      this.events[eventName] = []; //Creates the event's listeners array
    }
    this.events[eventName].push(callback); //Adds the listener function to the event's listeners array
  }

  emit(eventName){
    const event = this.events[eventName];
    if(event) {
      event.forEach(callback => { //Calling every function in the event's listeners array
       callback.call(null); //Suposed to be tested in ex. 2
      });
    }
  }

  off(eventName, callback){
    if(this.events[eventName]){
      this.events[eventName].delete(callback); //Removes the desired listener function
    }
  }
}

class Movie{

  constructor(title, year, duration){
    this.title = title;
    this.year = year;
    this.duration = duration;
  }

  //Method hardcoding for logging on console
  play(){return "Playing " + this.title}
  pause(){return "Paused " + this.title}
  resume(){return "Resuming " + this.title}
}

class Actor{

  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}


//Instantiating Movies, trying methods and logging them on console
var PulpFiction = new Movie("Pulp Fiction", 1994, 178);
console.log(PulpFiction);
console.log(PulpFiction.play());

var EnterTheVoid = new Movie("Enter the Void", 2009, 161);
console.log(EnterTheVoid);
console.log(PulpFiction.pause());
console.log(EnterTheVoid.play());
console.log(EnterTheVoid.pause());
console.log(PulpFiction.resume());