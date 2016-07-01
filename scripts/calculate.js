function calculate(m, ui){
    
    model = m; 
    userInput = ui;
    outcome = {};
    
    for(i in model){

        switch(model[i].type){
            
            case('line'):   if(model[i].calculate == true){
                                outcome[i] = customizedCalc();
                            } else {
                                outcome[i] = defaultValuesbyRange();
                            } break;

            case('bar'):    outcome[i] = model[i].data;
                            break;

            default:        console.log('Error.')  
        }
    }
    return outcome; 
}


function customizedCalc(){
    
    /** Get Range Array **/
    var range = d3.range(model[i].range[0], model[i].range[1] + 1, model[i].range[2]);
    tmp =[];
   
    /** Foreach step in range, multiply coefficients with user input / range step itself **/ 
    for(j in range){
        
        sum = 0;
        for(c in model[i].coef){
            
            splitted = c.split('^');
            criteria = /byRange\^\d*/
            if(splitted.length > 1){
                if(criteria.test(c)){
                    sum += (model[i].coef[c] * Math.pow(range[j], splitted[1]))
                } else {
                    sum += (model[i].coef[c] * Math.pow(userInput[splitted[0]], splitted[1]));
                }
            } else {
                if(c == 'byRange'){
                    sum += (model[i].coef.byRange * range[j])
                } else {
                    sum += (userInput[c] * model[i].coef[c]);
                } 
            }
        }
        tmp.push([range[j], sum])
    }
    return tmp; 
    
}  

function defaultValuesbyRange(){

    /** Get Range Array **/
    var range = d3.range(model[i].range[0], model[i].range[1] + 1, model[i].range[2]);
    tmp =[];

    for(j = 0; j < range.length; j++){
        tmp.push([range[j], model[i].data[j]]);
    }
    return tmp;

}


    
    