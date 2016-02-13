function loadInbox(){
            var data_file = "https://db4.insightglobe.net/career/mail";
            var http_request = new XMLHttpRequest();
            try{
               // Opera 8.0+, Firefox, Chrome, Safari
               http_request = new XMLHttpRequest();
            }catch (e){
               // Internet Explorer Browsers
               try{
                  http_request = new ActiveXObject("Msxml2.XMLHTTP");
          
               }catch (e) {
        
                  try{
                     http_request = new ActiveXObject("Microsoft.XMLHTTP");
                  }catch (e){
                     // Something went wrong
                     alert("Sorry! Your browser broke!");
                     return false;
                  }
          
               }
            }
      
            http_request.onreadystatechange = function(){
      
               if (http_request.readyState == 4  ){
                  // Javascript function JSON.parse to parse JSON data
                  var jsonObj = JSON.parse(http_request.responseText);

                  // jsonObj variable now contains the data structure and can
                  // be accessed as jsonObj.name and jsonObj.country.
                  document.getElementById("Name").innerHTML = jsonObj.mails[1].from;
                  document.getElementById("Country").innerHTML = jsonObj.to;
               }
            }
      
            http_request.open("GET", data_file, true);
            http_request.send();
         }
    

  