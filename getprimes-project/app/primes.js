function _isPrime(num){
	var n = 2;
	while ((n*n)<=num){
		if(num%n == 0){
			return 'False';
		}
		n += 1;
	}
	return 'True'
}


module.exports = {

	getPrimes: function(num){
		var primeArray = [];
		
		if(num<0){
			return 'Invalid input';
		}else if ((num == 0) || (num ==2)){
			return ([]);
		}else{
			for(i=3; i<=num; i++){
				if(_isPrime(i) == 'True'){
					primeArray.push(i);
				}
			}
			return primeArray;
		}
	}
}


