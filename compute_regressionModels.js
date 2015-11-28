

function computeRegressionModels(regressionModel){
	var outputRegressions = {};

	for (key in regressionModel){
		var output = 0;
		for (property in regressionModel[key]){
			output += input[property] * regressionModel[key][property];
		};	
		
	outputRegressions[key] = output;
	};
};
