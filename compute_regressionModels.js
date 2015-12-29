

function computeRegressionModels(emptyInput, regressionModel){
	
	var outputRegressions = {};

	for (key in regressionModel){
		var output = 0;
		for (property in regressionModel[key]){
			output += emptyInput[property] * regressionModel[key][property];
		};	
		
	outputRegressions[key] = output;
	};
	console.log(outputRegressions);
};
