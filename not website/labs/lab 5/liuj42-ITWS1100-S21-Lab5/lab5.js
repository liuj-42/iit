/* Lab 5 JavaScript File 
   Place variables and functions in this file */

   //focus on the first name form thing
function focusFirstName(formObj) {
   formObj.firstName.focus();
}
   //check to see if the value of the form is equal to the placeholder parameter passed through the function
function focusIn(id, placeholder) {
   if (document.getElementById(id).value == placeholder) {
      document.getElementById(id).value = "";
   }
}
   //check to see if the value of the form is empty or not, and will replace the form with the placeholder if it is empty
function focusOut(id, placeholder) {
   if (document.getElementById(id).value == "") {
      document.getElementById(id).value = placeholder;
   }
}
   //sends out an alert with the first name last name is nickname as long as those values are not default values
function clickme() {
   var firstName = document.getElementById("firstName").value;
   var lastName = document.getElementById("lastName").value;
   var nick = document.getElementById("pseudonym").value;
   alert((firstName == "First name" ? "" : firstName) + " " + (lastName == "Last name" ? "" : lastName) + " is " + (nick == "Nickname" ? "" : nick));
}

function validate(formObj) {
   // put your validation code here
   // it will be a series of if statements
   var isValid = true; //used to keep track of the first value that hasnt been filled out yet
   var error = "Form is valid"; //by default form is good
   if (formObj.firstName.value == "" || formObj.firstName.value == "First name") { //checks to see if value if empty or the default value
      if (isValid) { //if this is the first value that is empty then sets error to equal that, sets isValid to false, and focuses on the value
         error = "You must enter a first name\n";
         isValid = false;
         formObj.firstName.focus();
      } else { //otherwise add to the existing string (other errors are already present)
         error += "You must enter a first name\n";
      }

   } 
   if (formObj.lastName.value == "" || formObj.lastName.value == "Last name") { //same as above
      if (isValid) {
         error = "You must enter a last name\n";
         isValid = false;
         formObj.lastName.focus();
      } else {
         error += "You must enter a last name\n";
      }
   }
   if (formObj.title.value == "" || formObj.title.value == "title") {
      if (isValid) {
         error = "You must enter a title\n";
         isValid = false;
         formObj.title.focus();
      } else {
         error += "You must enter a title\n";
      }
   }
   if (formObj.org.value == "" || formObj.org.value == "Organization") {
      if (isValid) {
         error = "You must enter an organization\n";
         isValid = false;
         formObj.org.focus();
      } else {
         error += "You must enter an organization\n";
      }
   }
   if (formObj.pseudonym.value == "" || formObj.pseudonym.value == "Nickname") {
      if (isValid) {
         error = "You must enter a nickname\n";
         isValid = false;
         formObj.pseudonym.focus();
      } else {
         error += "You must enter a nickname\n";
      }
   }
   if (formObj.comments.value == "" || formObj.comments.value == "Comments") { 
      if (isValid) {
         error = "You must enter comments\n";
         isValid = false;
         formObj.comments.focus();
      } else {
         error += "You must enter comments\n";
      }
   }
   alert(error); //if there are no errors, the error variable is not changed (says that the form is valid) otherwise alerts with the errors
   return false; //returns false so the user will stay on the page when clicking the button even if it works because i dont have anywhere for the button to lead to
}
