var dataset1;
			var abc = {};
			var j;

			function loadRegressionModel2(d1){
				for(var i = 0; i < d1.length; i++){
					if(!abc.hasOwnProperty(d1[i].key)){
						abc[d1[i].key] = {};
						j = i;
						while(j < d1.length && d1[i].key == d1[j].key){
							
							if(myval = (myval = abc[d1[i].key]) && (myval = myval[d1[j].property])){
								console.log("j ist gerade: " + j +  " ,property ist gerade: " + myval);
								console.log(abc[d1[i].key][d1[j].property])
							}
							abc[d1[i].key][d1[j].property] = d1[j].value;
							
							j++;
						};
					};
				};
				return abc;
			};
			
		
			
			d3.csv("inputForm2.csv", function(data) {
				dataset1 = data; 
				loadRegressionModel2(dataset1);
				console.log(inputForm);	
			});
	
			/*
			var dataset1;
			var inputForm = {};
			var j;

			function loadRegressionModel2(d1){
				for(var i = 0; i < d1.length; i++){
					if(!inputForm.hasOwnProperty(d1[i].key)){
						inputForm[d1[i].key] = {};
						j = i;
						while(j < d1.length && d1[i].key == d1[j].key){
				
							if(d1[j].property in inputForm[d1[i].key] == true){
								var k = j-1;
								tmp = [];
								tmp.push(d1[k].value);
								tmp.push(d1[j].value);
								inputForm[d1[i].key][d1[j].property] = tmp;
							}
							else{
								inputForm[d1[i].key][d1[j].property] = d1[j].value;
							};
							++j;
						};
					};
				};
				return inputForm;
			};
			
			
			d3.csv("inputForm2.csv", function(data) {
				dataset1 = data; 
				loadRegressionModel2(dataset1);
				console.log(inputForm);	*/
				
				/** 3) Create Input Forms **/
				createInputForms(abc);
			//});
			