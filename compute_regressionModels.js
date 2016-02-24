

function computeRegressionModels(userInput, values){
	
	var output = {};

	for (key in values){
		var tmp = 0;
		for (property in values[key].calc){
		
			if(userInput[property].constructor === Array){
				for(i=0; i < userInput[property].length; i++){
					tmp += userInput[property][i] * values[key].calc[property];
				};
				continue;
			};
			
			tmp += userInput[property] * values[key].calc[property];	
		};
		output[key] = tmp;
		console.log(values[key] + "" + tmp);
	};
	
	return output;
	
};
	