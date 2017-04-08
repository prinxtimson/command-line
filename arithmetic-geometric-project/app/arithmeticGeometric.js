
	 function arithmetic(arrayNum){
		var diff = arrayNum[1] - arrayNum[0];
		for(i=0; i<arrayNum.length-1; i++){
			if ((arrayNum[i+1]-arrayNum[i]) != diff){
				return 'False';
			}
		}
		return 'True';
	}

	function geometric(arrayNum){
		var diff = arrayNum[1]/arrayNum[0];
		for(i=0; i<arrayNum.length-1; i++){
			if ((arrayNum[i+1]/arrayNum[i]) != diff){
				return 'False';
			}
		}
		return 'True';
	}
module.exports = {
	aritGeo: function(arrayNum){
		if (arrayNum.length == 0){
			return 0;
		}else if (arithmetic(arrayNum) == 'True'){
			return 'Arithmetic';
		}else if (geometric(arrayNum) ==  'True'){
			return 'Geometric'
		}else{
			return (-1);
		}
	}
}