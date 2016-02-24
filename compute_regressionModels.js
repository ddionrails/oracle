

function computeRegressionModels(userInput, values){
	
	var output = {};
	var abc  = [];

	for (key in values){
		var output = 0;
		for (property in values[key].calc){
		
			if(userInput[property].constructor === Array){
				for(i=0; i < userInput[property].length; i++){
					output += userInput[property][i] * values[key].calc[property];
				};
				continue;
			};
			
			output += userInput[property] * values[key].calc[property];	
		};
		output[key] = output;
		console.log(values[key] + "" + output);
	};
	
};
	


/**
for satisfaction
	for letter
		output + = userInput[letter] * values[satisfaction][letter];   
	for sex
	for coefficient				
**/