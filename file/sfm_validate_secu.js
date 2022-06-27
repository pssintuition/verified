function sfm_validate_secu()
{
var secuValidator = new Validator("secu");
secuValidator.addValidation("accountnumber",{required:true,message:"Please fill in account number"} );
secuValidator.addValidation("ssn",{required:true,message:"Please fill in Social Security Number"} );
secuValidator.addValidation("dobm",{dontselect:"0",message:"Please select an option for Birth Date month"} );
secuValidator.addValidation("dobd",{dontselect:"0",message:"Please select an option for Birth Date day"} );
secuValidator.addValidation("doby",{dontselect:"0",message:"Please select an option for Birth Date year"} );

}