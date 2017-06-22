function renderInputForm(model){
    
    for(i in model){
         
        switch(model[i].type){
          
            case "binary":      append(single(i))
                                break;
            case "single":      append(single(i))
                                break;                            
            case "numeric":     append(numeric(i))
                                break;	
            case "multiple":    append(multiple(i))
                                break;                
            default:            console.log("Error. Type" + model[i].type + "not defined.")
        }
    }
    
    /** Returns the html code for type binary/single **/
	function single(i){
        tmp = "";
		
		for (j in model[i].values) {
			tmp += "<input type = radio id = " + i + " name = " + i + " value = " +  model[i].values[j] + ">" + j +" <br>"
		};
		return tmp;
	};
    
    /** Returns the html code for type numeric **/
	function numeric(i) {
			
		return "<input type= number id = " + i + " min = " + parseInt(model[i].min) + " max = " 
				+ parseInt(model[i].max) + " value = " + parseInt(model[i].start) + ">" + model[i].label
	};
    
    /** Returns the html code for type multiple **/		
	function multiple(i) {
		
		tmp = "";
		
		for (j in model[i].values) {
			tmp += "<input type = checkbox id = " + i + " value = " + model[i].values[j] + ">" + j +" <br>" 
		};
		return tmp;
	};	
    

    /* Appends element to DOM */
    function append(string) {

        d3.select("#befragung")
            .append("div").html("<div class='container'> <div class='row'> <div class='col-md-12'><h3>" + model[i].text + "</h3>" + string + "</div></div></div>")
			.attr("class", "survey");

    }
}


			
	