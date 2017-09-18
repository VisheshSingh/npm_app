const _ = require('lodash');
const numbers = [72,52,0,4,52,26,5,12];

_.each(numbers, function(number, i){
    console.log(number);
});