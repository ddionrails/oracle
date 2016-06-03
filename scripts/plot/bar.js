function barChart(){
   
    data = [];
    for(i = 0; i < rData.length; i++){
        tmp = [rData[i], howToPlot.dataLabels[i]]; 
        data.push(tmp);
    }
   
     // Append rect elements and map with data
    rects = svg.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .style('fill', function(d){ return usersCategory(d)} )
            .attr('class', 'rects');
   
    text = svg.selectAll('text')
            .data(data)
            .enter()
            .append('text')
            .attr('class', 'text');
    
    // X-Scale
    var xScale = d3.scale.linear()
        .domain([0, d3.max(data, function(d) {
            return d3.max(d.filter(function(value) {
                return typeof value === 'number';
            }));
        })])
    .range([0, w]);
                    
    // Y-Scale
    var yScale = d3.scale.ordinal()
        .domain(data.map(function(d){return (d[1])}))
        .rangeRoundBands([h, 0]);
                                  
    // X-Axis
    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient('bottom');
        
    svg.append('g')
        .call(xAxis)
        .attr('class', 'axis')
        .attr('transform', 'translate(0,' + h + ')');	
                    
    // Y-Axis
    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient('left');				

    svg.append('g')
        .call(yAxis)
        .attr('class', 'axis');		

    // Draw bars
    rects.attr('x', 0) 
        .attr('y', function(d) {return yScale(d[1])})
        .attr('width', function(d){return xScale(d[0])}) 
        .attr('height', (h / data.length) - barPadding);						
    
    //Append Labels
    barHeight = (h / data.length) - barPadding; 
    text.attr('x', function(d) {return xScale(d[0]) + 3})
        .attr('y', function(d) {return yScale(d[1]) + (barHeight/2) + 2})
        .text(function(d) {return (d3.round(d[0], 1))});	
           
}