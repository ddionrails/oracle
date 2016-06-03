function plot(rData, description){
    
    howToPlot = description;
    
    data = [];
    for(i = 0; i < rData.length; i++){
        tmp = [rData[i], howToPlot.dataLabels[i]]; 
        data.push(tmp);
    }
    
    // Set margin, width, height and padding for chart
    margin = {top: 20, right: 20, bottom: 20, left: 120};
    w = 600 - margin.left - margin.right;
    h = (100 + 20 * data.length) - margin.top - margin.bottom;
    barPadding = 1;
    
    // Create SVG ELement and append to #chart
    svg = d3.select('#chart')
                .append('svg')
                .attr('width', w + margin.left + margin.right)
                .attr('height', h + margin.top + margin.bottom )
                .attr('class', 'chart')
                .append('g')
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");	
            
    // Color Scale
    colors = d3.scale.category20();
    colors.domain(howToPlot.dataLabels)
    
    usersCategory = function(d){
        if(d[1] == howToPlot.dataLabels[userInput[current]]){
            return 'red';            
        } else {
            return 'steelblue';
        }    
    }
    
    switch(howToPlot.type) {
        
        case('bar'): barChart()
                     break;
        default:     console.log("Error.")
    }
    
    

}
   
