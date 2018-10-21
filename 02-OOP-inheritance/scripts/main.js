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
       callback.call(this);
      });
    }
  }

  off(eventName, callback){
    if(this.events[eventName]){
      this.events[eventName].delete(callback); //Removes the desired listener function
    }
  }
}

class Movie extends EventEmitter{

  constructor(title, year, duration){
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
  }

  
  play(){this.emit("Play")}
  pause(){this.emit("Pause")}
  resume(){this.emit("Resume")}
}

class Actor{

  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}


//Instantiating Movies, trying methods and logging them on console
var PulpFiction = new Movie("Pulp Fiction", 1994, 178);
PulpFiction.on("Play", callback => {console.log("The Play method has been emitted")});
PulpFiction.on("Pause", callback => {console.log("The Pause method has been emitted")});
PulpFiction.on("Resume", callback => {console.log("The Resume method has been emitted")});

console.log(PulpFiction);
PulpFiction.play();

var EnterTheVoid = new Movie("Enter the Void", 2009, 161);
EnterTheVoid.on("Play", callback => {console.log("The Play method has been emitted")});
EnterTheVoid.on("Pause", callback => {console.log("The Pause method has been emitted")});
EnterTheVoid.on("Resume", callback => {console.log("The Resume method has been emitted")});

console.log(EnterTheVoid);
PulpFiction.pause();
EnterTheVoid.play();
EnterTheVoid.pause();
PulpFiction.resume();