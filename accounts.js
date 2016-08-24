

addEvent(window, "load", retrieveMemberInfo, false);

function retrieveMemberInfo(){

	if(retrieveMCookie("memberInfo", "lname") || retrieveMCookie("memberInfo", "fname")){		
	  var allSpans = document.getElementsByTagName("span");
      for (var i = 0; i < allSpans.length; i++) {
         var cValue = retrieveMCookie("memberInfo", allSpans[i].id);
         if (cValue) allSpans[i].innerHTML = cValue;

		 if(allSpans[i].id == "fname"){
			 document.getElementById("greetName").innerHTML = retrieveMCookie("memberInfo", allSpans[i].id); 
			 var member = " Welcome to JavaScript Cookies demo !"
			 document.getElementById("guest").innerHTML = member;
		 }
      }
	}else{
		var nonMember = "You dont have an account. ";
		nonMember += " Click <a href='register.html'> here</a> to create";
		document.getElementById("greetName").innerHTML = "Guest";
		document.getElementById("guest").innerHTML = nonMember;
	}
	
}