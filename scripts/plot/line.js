function lineChart(){
    
    var data = [];
    var range = d3.range(howToPlot.by.min, howToPlot.by.max + 1, howToPlot.by.steps);
    range.map(function(d, i){
       
        tmp = [range[i], rData[i]];
        data.push(tmp);
        
    })

    // X-Scale
    var xScale = d3.scale.ordinal()
        .domain(range)
        .rangeRoundBands([0, w], 0, 0.5);
    
    // Y-Scale
    var yScale = d3.scale.linear()
        .domain([0, d3.max(data[1])])
        .range([h, 0]);
    
    // X-Axis
    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient('bottom');
        
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
        .attr('class', 'line')
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('d', path(data));	

}

