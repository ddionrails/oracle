function catchUserInput(model){
	userInput = {};
    userInput["null"] = 1;
	
	for(i in model){
		
		switch(model[i].type) {
			
			case "binary":      userInput[i] = single(i)
                                break;				
            case "single":      userInput[i] = single(i)
                                break;                            
            case "numeric":     userInput[i] = numeric(i)
                                break;	
            case "multiple":    userInput[i] = multiple(i)
                                break;            
            default:            console.log("Error. Type" + model[i].type + "not defined.")
        }
	}
	
	/** Catch user input for the type binary / single **/
	function single(i){
		try {
			return parseInt(d3.select('#' + i + ':checked').node().value);
			
		} catch(e) { 
			// Not sure how to handle yet.
		}
	};
	
	/** Catch user input for the type numeric **/
	function numeric(i){
		try {
            if(i == "age"){
                bYear = parseInt(d3.select('#' + i).property("value"));
                return (new Date().getFullYear()- bYear);
            } else {
                return parseInt(d3.select('#' + i).property("value"));
            }    
		} catch(e) { 
			// Not sure how to handle yet
		}
	}
	
	/** Catch user input for the type multiple **/
	function multiple(i){
		try {
			values = [];
			$.each($('input[id =' + i + ']:checkbox:checked'), function(){
				values.push(parseInt($(this).val()));
			});
			return values;
		} catch(e) { 
			// Not sure how to handle yet
		}
	}
	return userInput;
}