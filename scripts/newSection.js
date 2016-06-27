function appendNewSection(id, howToPlot){
	
    /**
	section = 
		"<div class='section'>" +
			"<div class='container'> " +
				"<div class='row'>" +
                    "<div id=" + id + " " + "class='col-md-6'></div>" +
				"<div class='col-md-6'>" +
                    "<h1>" + howToPlot.text.title + "</h1>" + 
                    "<h3>" + howToPlot.text.subTitle + "</h3>" +	
                    "<p>" + howToPlot.text.paragraph + "</p>" +
				"</div>" +
                "</div>" +
            "</div>" +
        "</div>"
		
	 d3.select('#section')
		.append("section").html(section)
		.attr("class", "container"); **/
        
    section = 
			"<div class='container auswertung'> " +
                "<div class='row'>" +
                    "<div class='col-md-12  text-center'>" +
                        "<div class='header'>"+ 
                            "<h2>" + howToPlot.text.title + "</h1>" + 
                        "</div>"+
                         "<h4>" + howToPlot.text.subTitle + "</h4>" +	
                    "</div>" + 
                "</div>" +   
				"<div class='row'>" +
                    "<div id=" + id + " " + "class='col-md-12 text-center'></div>" +
                "</div>" +
                "<div class='row'>" +
                    "<div class='col-md-12  text-center paragraph-auswertung'>" +
                        "<p>" + howToPlot.text.paragraph + "</p>" +
                    "</div>" +
                "</div>" +
            "</div>"

     d3.select('#auswertung')
		.append("section").html(section)
            
}