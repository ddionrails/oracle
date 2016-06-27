function plot(data, model){

    rData = data;
    howToPlot = model

    // Set margin, width, height and padding for chart
    margin = {top: 10, right: 120, bottom: 20, left: 120};
    w = 1000 - margin.left - margin.right;
    h = 350 - margin.top - margin.bottom;
    barPadding = 1;
    
    
	id = i
	appendNewSection(id, howToPlot);
    
	// Create SVG ELement and append to #chart
    svg = d3.select('#' + id)
                .append('svg')
                .attr('width', w + margin.left + margin.right)
                .attr('height', h + margin.top + margin.bottom )
                .attr('class', 'chart img-fluid')
                .append('g')
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");	
    
    
    
    switch(howToPlot.type) {
        
        case('bar'):            barChart()
                                break;                       
        case('line'):           lineChart()
                                break;            
        default:                console.log('Error.')
    }

}
   
