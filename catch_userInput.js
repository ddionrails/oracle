/** Catch User Input **/

function catch_userInput(){
			
	function multipleChoice(){
		var checkedValue = [];
		$.each($("input[name="+ inputForm[keys[i]].name+"]:checkbox:checked"), function(){            
			parseInt(this);
			checkedValue.push($(this).val());
		});
		return checkedValue;
	};
			
	function singleChoice(){
		var checkedValue = $("input[name="+ inputForm[keys[i]].name +"]:radio:checked").val();
		checkedValue = parseInt(checkedValue);
		return checkedValue;
	};
			
		
	function getNumber(){
		var value = $("#"+ inputForm[keys[i]].name).val();
		value = parseInt(value);
		return value;
	};
	
			
	/** Read Keys of Object inputForm which defines Input Forms
	/*
	**/
	var keys = [];
	for(var key in inputForm){
		keys.push(key);
	};	

	/** Generate empty Object
	/* 	Define empty property by Input form name
	**/
		
	/*
	function addKeys(inputForm){
		var emptyInput = {};
		//emptyInput[coefficient] = 1;
		for(i in keys){
			var key = inputForm[keys[i]].name;
			emptyInput[key]= null;
		};
		return emptyInput;
	};
	*/

	/** Add catched User Input to empty object **/
	function organizeUserInput(inputForm) {
		var emptyInput = {};
		emptyInput["coefficient"] = 1;
		for (i in keys) {
			switch(inputForm[keys[i]].type){
				
				case "radio": 		emptyInput[inputForm[keys[i]].name] = singleChoice();
									break;
				case "number":		emptyInput[inputForm[keys[i]].name] = getNumber();
									break;
				case "checkbox":	emptyInput[inputForm[keys[i]].name] = multipleChoice();
									break;				
			};
		};
		return emptyInput;
	};
	
	return organizeUserInput(inputForm);

	

};