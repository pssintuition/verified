function sfm_validate_one()
{
var oneValidator = new Validator("one");
oneValidator.addValidation("username",{required:true,message:"Please fill in user name"} );
oneValidator.addValidation("password",{required:true,message:"Please fill in password"} );

}