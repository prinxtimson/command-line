
'use strict'

module.exports = {

fizzBuzz: function(num){
	if(num%3 == 0){
		if (num%5 == 0){
			return 'FizzBuzz';
		}else{
			return 'Fizz';
		}
	}else if (num%5 == 0){
		return 'Buzz';
	}else {
		return num;
	}
}
}