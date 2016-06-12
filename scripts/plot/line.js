function lineChart(){
    
	
    // X-Scale
    var xScale = d3.scale.ordinal()
        .domain(range)
        .rangePoints([0, w], 0.5);
        
    distance = (xScale.range()[1] - xScale.range()[0])/2;    
    
    // Y-Scale
    var yScale = d3.scale.linear()
        .domain([0, 12500])
        .range([h, 0]);
        
     
    
    // X-Axis
    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient('bottom')
        
    // Y-Axis
    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient('left');
        
    svg.append('g')
        .call(xAxis)
        .attr('class', 'axis')
        .attr('transform', 'translate(0,' + h + ')')	

    svg.append('g')
        .call(yAxis)
        .attr('class', 'axis');
        
    
    // Apend path 
    var path = d3.svg.line()
        .x(function(d) {return xScale(d[0])})
        .y(function (d) {return yScale(d[1])})
        .interpolate('linear');
                 
    svg.append('path')
		.attr('d', path(rData))
        .attr('class', 'line')
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 3);
        
        
    svg.append('line') 
       .attr('x1', xScale(40))
       .attr('x2', xScale(40))
       .attr('y1', 0)
       .attr('y2', h)
       .attr('stroke-width', 1)
       .attr('stroke', 'grey')
       .style('stroke-dasharray', ('2, 2'))  
       .attr('fill', 'none');

}

