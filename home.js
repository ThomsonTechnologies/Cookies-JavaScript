addEvent(window, "load", initPage, false);

function initPage() {

   if (cookiesEnabled() == false)
      alert("You must enable cookies for this website to work properly ");

   // Retrieve date of last visit
   if (retrieveCookie("lastVisit") == null) lastVisit = "First time"
   else lastVisit = retrieveCookie("lastVisit");

   // Set date of current visit
   var today = new Date();
   var currentVisit = writeDateString(today);

   // Write current visit to lastVisit cookie
   expire = new Date();
   expire.setMonth(expire.getMonth() + 6);
   writeCookie("lastVisit", currentVisit, expire);

   if (retrieveMCookie("memberInfo", "lname") != null) {

      var firstName = retrieveMCookie("memberInfo", "fname");

      var lastModified = new Date(document.lastModified);
      var pageUpdate = writeDateString(lastModified);

      var welcome = document.createElement("div");
      welcome.id = "welcome";
	  var webData = document.createElement("div");
	  webData.id = "webData";
	  
      htmlString = "<span id='welcomeBack'>Welcome back </span><br><span id='welcomeUser'>" + firstName;
      htmlString += "</span>";
      htmlWebData = "Last visit: <span id='data'>" + lastVisit + "</span>";
      htmlWebData += "<br />";
      htmlWebData += "Last update: <span id='data'>" + pageUpdate + "</span>";

      welcome.innerHTML = htmlString;
	  webData.innerHTML = htmlWebData;
	  
	  var sideBox = document.getElementById("sideBox");
      sideBox.appendChild(welcome);
	  sideBox.appendChild(webData);
	   
   }

}