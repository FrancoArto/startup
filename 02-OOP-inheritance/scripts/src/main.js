!'use strict';

import Movie from './modules/movie/movie.js';
import Actor from './modules/actor/actor.js';
import Logger from './modules/logger/logger.js';


//Instantiating Movies, trying methods and logging them on console
var logger =  new Logger();

var pulpFiction = new Movie('Pulp Fiction', 1994, 178);
pulpFiction.on('Play', callback => {logger.log('The Play method has been emitted')});

logger.log(pulpFiction);
pulpFiction.play();


var enterTheVoid = new Movie('Enter the Void', 2009, 161);
enterTheVoid.on('Play', callback => {logger.log('The Play method has been emitted')});

logger.log(enterTheVoid);
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
