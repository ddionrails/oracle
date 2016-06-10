function calculate(m, ui){
    
    model = m; 
    userInput = ui;
    outcome = {};
    
    for(i in model){

        if(model[i].calculate == true){
            outcome[i] = customizedCalc();
        } else {
            outcome[i] = model[i].data;
        }
    }
    return outcome; 
}


function customizedCalc(){
    
    /** Get Range Array **/
    range = d3.range(model[i].range[0], model[i].range[1] + 1, model[i].range[2]);
    tmp =[];
   
    /** Foreach step in range, multiply coefficients with user input / range step itself **/ 
    for(j in range){
        
        sum = 0;
        for(c in model[i].coef){
            if(c == 'byRange'){
                sum += (model[i].coef.byRange * range[j])
            } else {
                sum += (userInput[c] *  model[i].coef[c]);
            }
        }
        tmp.push([range[j], sum])
    }
    return tmp; 
    
}  
    
    