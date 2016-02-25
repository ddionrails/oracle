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
		
		panelHeader = "<div class= \"panel panel-default\"> <div class=\"panel-heading\"> <h3 class=\"panel-title\">" + inputForm[keys[i]].text + "</h3></div>"
		panelBody = "<div class=\"panel-body\">" + chooseInputType(keys[i].type) + "</div> </div>"
	
			var el = d3.select("#"+keys[i]+"");
						el.html(panelHeader);
							
						el.append("form")
							.html(panelBody);
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
		
		var htmlString;
		var htmlString2 = "";
		
		for (subItem in inputForm[key].value) {
			htmlString = "<input type = radio name = " + inputForm[key].name + " value = " + subItem + ">"+inputForm[key].value[subItem]+" <br>"
			htmlString2 += htmlString;
		};
		return htmlString2;
	};
	
	/** Returns the html code for input form type checkbox (Multiple Choice) **/		
	function createCheckbox(key) {
		
		var htmlString;
		var htmlString2 = "";
		
		for (subItem in inputForm[key].value) {
			htmlString = "<input type = 'checkbox' name = " + inputForm[key].name + " value = " + subItem + ">"+inputForm[key].value[subItem] +" <br>" 
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
			
			case "binary": 
			case "single": 		return createRadio(keys[i])
								break;			
			case "numeric":		return createNumber(keys[i])
								break;
			case "multiple":	return createCheckbox(keys[i])
								break;				
		};
	}
	
	createForm(inputForm);
}
	


			
	