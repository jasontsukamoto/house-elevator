/*jslint node: true */
'use strict';

module.exports = {
  goto : function(current, destination) {
    var levels = 4;

    //error check -need to check if they are not a number then return 0
   if(current > levels -1 || destination > levels - 1 || typeof current !== 'number' || typeof destination !== 'number') {
      return 0;
    } else {
      //makes the elevator move up and down
      if (current === 0) {
        return current + destination;
      } else if (current !== 0 && current > destination) {
        return destination - current;
      } else if (current !== 0 && current < destination) {
        return destination - current;
      } else if (current === destination) {
        return 0;
      }
    }







  //closes function
  }
};

