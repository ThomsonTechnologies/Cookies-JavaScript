function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}


function writeDateString(dateObj) {

   var monthName = new Array("Jan", "Feb", "Mar",
  "Apr", "May", "Jun", "Jul", "Aug", "Sep",
  "Oct", "Nov", "Dec");
	
   var thisMonth = dateObj.getMonth();
   var thisYear = dateObj.getFullYear();

   return monthName[thisMonth] + " " + dateObj.getDate() + ", " + thisYear;
}


function writeCookie(cName, cValue, expDate, cPath, cDomain, cSecure) {

   if (cName && cValue != "") {
      var cString = cName + "=" + escape(cValue);

      if (expDate) cString += ";expires=" + expDate.toGMTString();
      if (cPath)   cString += ";path=" + cPath;
      if (cDomain) cString += ";domain=" + cDomain;
      if (cSecure) cString += ";secure";

      document.cookie = cString;

   }

}

function retrieveCookie(cName) {

   if (document.cookie) {

      var cookiesArray = document.cookie.split("; ");
      for (var i = 0; i < cookiesArray.length; i++) {
         if (cookiesArray[i].split("=")[0] == cName) {
            return unescape(cookiesArray[i].split("=")[1]);
         }
      }

   }

}

function deleteCookie(cName) {

   if (document.cookie) {

      var cookiesArray = document.cookie.split("; ");
      for (var i = 0; i < cookiesArray.length; i++) {
         if (cookiesArray[i].split("=")[0] == cName) {
            document.cookie = cName + "=;expires=Thu, 01-Jan-1970 00:00:01 GMT";
         }
      }

   }

}


function writeMCookie(cName, fName, fValue, expDate, cPath, cDomain, cSecure) {

   if (cName != null && fName != null && fValue != null) {

      // Create the subkey
      var subkey = fName + "=" + escape(fValue);

      // Retrieve the current cookie value
      var cValue = null;
      var cookiesArray = document.cookie.split("; ");
      for (var i = 0; i < cookiesArray.length; i++) {
         if (cookiesArray[i].split("=")[0] ==  cName) {
            var valueIndex = cookiesArray[i].indexOf("=") + 1;
            cValue = cookiesArray[i].slice(valueIndex);
            break;
         }
      }

     if (cValue) {

         var fieldExists = false;
         var cValueArray = cValue.split("&");
         for (var i = 0; i < cValueArray.length; i++) {
            if (cValueArray[i].split("=")[0] == fName) {
               fieldExists = true;
               cValueArray[i] = subkey;
               break;
            }
         }

         if (fieldExists) cValue = cValueArray.join("&")
         else cValue += "&" + subkey;

     } else {
 
         cValue = subkey;

     }

      var cString = cName + "=" + cValue;

      if (expDate) cString += ";expires=" + expDate.toGMTString();
      if (cPath)   cString += ";path=" + cPath;
      if (cDomain) cString += ";domain=" + cDomain;
      if (cSecure) cString += ";secure";

      document.cookie = cString;
   } 

}


function retrieveMCookie(cName, fName) {

   if (document.cookie) {

      // Retrieve the cookie value
      var cValue = null;
      var cookiesArray = document.cookie.split("; ");
      for (var i = 0; i < cookiesArray.length; i++) {
         if (cookiesArray[i].split("=")[0] == cName) {
            var valueIndex = cookiesArray[i].indexOf("=") + 1;
            cValue = cookiesArray[i].slice(valueIndex);
            break;
         }
      }

      // Retrieve the field value within the cookie
      if (cValue) {
         var cValueArray = cValue.split("&");
         for (var i = 0; i < cValueArray.length; i++) {
   
            if (cValueArray[i].split("=")[0] == fName)
               return unescape(cValueArray[i].split("=")[1]);

         }
      }

   }

}

function cookiesEnabled() {

   var cookiesTest = false;

   writeCookie("tempCookie", "temp");
   if (retrieveCookie("tempCookie")) {
      cookiesTest = true;
      deleteCookie("tempCookie");
   }

   return cookiesTest;

}