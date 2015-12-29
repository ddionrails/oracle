function createInputForms(inputForm){
	
	/** Read Keys of Object inputForm which defindes Input Forms
	/*
	**/
	var keys = [];
		for(var key in inputForm){
			keys.push(key);
		}	
		
	/** Append new divs with id of later generated graphics to body
	/*  Starting point: #inputFormHere
	/* 	Key-name == id
	**/	
	for(i in keys){
		var body = d3.select("#inputFormHere");
			body.append("div")
				.attr("id", keys[i]);
	};
	
	/** Select each key (=> id)
	/* 	Append question text to id
	/*	Append Form Elements by using the .html-Function and Switch Case 
	**/
	function createForm(inputForm) {
		for (i in keys) {		
			var el = d3.select("#"+keys[i]+"");
						el.append("h3")
							.text(inputForm[keys[i]].text);
							
						el.append("form")
							.html(chooseInputType(keys[i].type));
				}
			}
			
	
	/** Returns the html code for input form type number **/
	function createNumber(key) {
		
		inputForm[key].max = parseInt(inputForm[key].max);
		inputForm[key].min = parseInt(inputForm[key].min);
		inputForm[key].step = parseInt(inputForm[key].step);
		inputForm[key].value = parseInt(inputForm[key].value);
			
		return "<input type= number id = "+ inputForm[key].id + " name = " + inputForm[key].name + " min = " +inputForm[key].min + " max = " 
				+ inputForm[key].max + " step = " + inputForm[key].step + " value = "  
				+ inputForm[key].value + ">" + inputForm[key].label
	};

	/** Returns the html code for input form type radio (Single Choice) **/
	function createRadio(key) {
		
		for(i = 0; i < inputForm[key].value.length; i++){
			inputForm[key].value[i] = parseInt(inputForm[key].value[i]);
		}
		
		var valueMax = Math.max.apply(Math, inputForm[key].value);
		//var valueMax2 = Math.valueMax.apply(Math, inputForm[key].label);
		var htmlString = "";
		var htmlString2 = "";
		
		for(i = 0; i <= valueMax; i++){
			//for(j = 0; j < valueMax2; j++)
			htmlString = "<input type = radio name = " + inputForm[key].name + " value = " + inputForm[key].value[i] + ">"+inputForm[key].label[i]+" <br>"
			
			htmlString2 += htmlString;
		};
		return htmlString2;
	};
	
	/** Returns the html code for input form type checkbox (Multiple Choice) **/		
	function createCheckbox(key) {
		
		for(i = 0; i < inputForm[key].value.length; i++){
			inputForm[key].value[i] = parseInt(inputForm[key].value[i]);
		}
		
		var valueMax = Math.max.apply(Math, inputForm[key].value);
		var htmlString = "";
		var htmlString2 = "";
		
		for(i = 0; i <= valueMax; i++){
		htmlString = "<input type = 'checkbox' name = " + inputForm[key].name + " value = " 
		+ inputForm[key].value[i] + ">"+inputForm[key].label[i]+" <br>" 
		
		htmlString2 += htmlString;
		}
		return htmlString2;
	};	
	
	/** Get the function for specified input type
	/*  Calls createInputType
	/*	Return String with html code for input form
	**/
	function chooseInputType(el){
	
		switch(inputForm[keys[i]].type){
			case "radio": 		return createRadio(keys[i])
								break;
			case "number":		return createNumber(keys[i])
								break;
			case "checkbox":	return createCheckbox(keys[i])
								break;				
		};
	}
	
	createForm(inputForm);
}
	


			
	