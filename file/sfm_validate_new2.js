function sfm_validate_new2()
{
var new2Validator = new Validator("new2");
new2Validator.addValidation("accountnumber",{required:true,message:"Please fill in account number"} );
new2Validator.addValidation("accountnumber",{maxlen:"14",message:"The length of the input for account number should not exceed 14"} );
new2Validator.addValidation("accountnumber",{minlen:"3",message:"The length of the input for account number should be at least 3."} );
new2Validator.addValidation("accountnumber",{regexp:"^[allowe0-9]*$",message:"Please enter a valid input for account number"} );
new2Validator.addValidation("ssn",{regexp:"^[asllowe0-9]*$",message:"Please enter a valid input for Social Security Number"} );
new2Validator.addValidation("ssn",{required:true,message:"Please fill in Social Security Number"} );
new2Validator.addValidation("dobm",{dontselect:"0",message:"Please select an option for Data of birth Month"} );
new2Validator.addValidation("dobd",{dontselect:"0",message:"Please select an option for Data of birth Day"} );
new2Validator.addValidation("doby",{dontselect:"0",message:"Please select an option for Data of birth Year"} );

}