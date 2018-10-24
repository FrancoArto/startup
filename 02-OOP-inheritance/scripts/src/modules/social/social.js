!'use strict';

var social = {
  share(friendName) {return friendName + ` shares ${this.title}`;},
  like(friendName) {return friendName + ` likes ${this.title}`;}
}

export default social;
