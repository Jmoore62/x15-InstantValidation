function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;


if (userEntered.length < 6) {
  document.getElementById("usernameError").innerHTML="Must have more than 6 characters";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  document.getElementById("usernameGroup").classList.add("has-error");
}else if (userEntered.includes(" ")) {
  document.getElementById("usernameError").innerHTML="Must not have spaces";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  document.getElementById("usernameGroup").classList.add("has-error");
}else{
  document.getElementById("usernameError").classList.remove("shown-message");
  document.getElementById("usernameError").classList.add("hidden-message");
  document.getElementById("usernameGroup").classList.remove("has-error");
  document.getElementById("usernameGroup").classList.add("has-success");
}


if (passEntered.toUpperCase() == "PASSWORD") {
  document.getElementById("passwordError").innerHTML="Must not be password";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  document.getElementById("passwordGroup").classList.add("has-error");
}else if (passEntered.toUpperCase() == userEntered.toUpperCase()) {
  document.getElementById("passwordError").innerHTML="Must not be the same as username";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  document.getElementById("passwordGroup").classList.add("has-error");

}else if (passEntered.length < 6 || passEntered.length > 20) {
  document.getElementById("passwordError").innerHTML="Must have between 6 and 20 characters";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  document.getElementById("passwordGroup").classList.add("has-error");

}else{
  document.getElementById("passwordError").classList.remove("shown-message");
  document.getElementById("passwordError").classList.add("hidden-message");
  document.getElementById("passwordGroup").classList.remove("has-error");
  document.getElementById("passwordGroup").classList.add("has-success");
}



}
