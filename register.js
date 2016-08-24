addEvent(window, "load", initPage, false);

function initPage(){
	document.getElementById("sbutton").onclick = saveMemberInfo;
}


function saveMemberInfo() {
	
   // Set the cookie expiration date one year hence
   var expire = new Date();
   expire.setFullYear(expire.getFullYear() + 1);

   // Loop through all of the elements in the form
   var allFields = document.registerForm.elements;
   
   for (var i = 0; i < allFields.length; i++) {

      if (allFields[i].type == "text") {
         // Write input box value to a cookie
		 
         writeMCookie("memberInfo", allFields[i].id, allFields[i].value, expire);
      }

   }

   alert("Registration data saved");
}