"use strict";

var _movie = _interopRequireDefault(require("./modules/movie/movie.js"));

var _actor = _interopRequireDefault(require("./modules/actor/actor.js"));

var _logger = _interopRequireDefault(require("./modules/logger/logger.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

!'use strict';
//Instantiating Movies, trying methods and logging them on console
var logger = new _logger.default();
var pulpFiction = new _movie.default('Pulp Fiction', 1994, 178);
pulpFiction.on('Play', callback => {
  logger.log('The Play method has been emitted');
});
logger.log(pulpFiction);
pulpFiction.play();
var enterTheVoid = new _movie.default('Enter the Void', 2009, 161);
enterTheVoid.on('Play', callback => {
  logger.log('The Play method has been emitted');
});
logger.log(enterTheVoid);
enterTheVoid.play();
var actor = new _actor.default('John Travolta', 59);
var cast = [new _actor.default('Leonardo Di Caprio', 57), new _actor.default('Christoph Waltz', 68), new _actor.default('Kerry Washington', 39)];
pulpFiction.addCast(actor);
logger.log(pulpFiction.cast);
enterTheVoid.addCast(cast);
logger.log(enterTheVoid.cast); //Social mixin

logger.log(pulpFiction.like('Franco'));
logger.log(enterTheVoid.share('Agustin'));