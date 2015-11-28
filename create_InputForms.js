function createInputForms(inputForm){
	
	var keys = [];
		for(var key in inputForm){
			keys.push(key);
		}	
		
	for(i in keys){
		var xyz = d3.select("#inputFormHere");
			xyz.append("div")
				.attr("id", keys[i]);
				

	
	function createForm(inputForm) {
				for (i in keys) {		
					var abc = d3.select("#"+keys[i]+"");
						abc.append("h3")
							.text(inputForm[keys[i]].text);
							
						abc.append("form")
							.html(switchCase(keys[i].type));
				}
			}
		
			function createNumber(key) {
				return "<input type= 'number' min = " +inputForm[key].min + "valueMax = " + inputForm[key].max + "step=" + inputForm[key].step + "value=" + inputForm[key].value + ">" + inputForm[key].label			};
			
			function createRadio(key) {
				var valueMax = Math.max.apply(Math, inputForm[key].value);
				//var valueMax2 = Math.valueMax.apply(Math, inputForm[key].label);
				var htmlString = "";
				var htmlString2 = "";
				for(i = 0; i <= valueMax; i++){
						//for(j = 0; j < valueMax2; j++)
						htmlString = "<input type = 'radio' name = " + inputForm[key].name + " value = " + inputForm[key].value[i] + "checked>"+inputForm[key].label[i]+" <br>"
						htmlString2 += htmlString;
						
					};
					return htmlString2;
				};
				
			function createCheckbox(key) {
				var valueMax = Math.max.apply(Math, inputForm[key].value);
				var htmlString = "";
				var htmlString2 = "";
				for(i = 0; i <= valueMax; i++){
				htmlString = "<input type = 'checkbox' name = " + inputForm[key].name[i] + " value = " + inputForm[key].value[i] + "checked>"+inputForm[key].label[i]+" <br>" 
				htmlString2 += htmlString;
				}
				return htmlString2;
			};	
							
			function switchCase(abc){
			
				switch(inputForm[keys[i]].type){
					case "radio": 		return createRadio(keys[i])
										break;
					case "number":		return createNumber(keys[i])
										break;
					case "checkbox":	return createCheckbox(keys[i])
										break;				
				};
			}		
	
	}
	
		createForm(inputForm);
}
			
	