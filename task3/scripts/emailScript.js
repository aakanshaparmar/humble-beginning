function initialLoad()
{
   loadInbox();
}

function loadInbox()
{
   var data_file = "https://db4.insightglobe.net/career/mail";
   var http_request = new XMLHttpRequest();
   try{
      // Opera 8.0+, Firefox, Chrome, Safari
      http_request = new XMLHttpRequest();
   }
   catch (e){
      // Internet Explorer Browsers
      try{
         http_request = new ActiveXObject("Msxml2.XMLHTTP");
      }
      catch (e) {
         try{
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
         }catch (e){
            // Something went wrong
            alert("Sorry! Your browser broke!");
            return false;
         }
       }
   }
      
   http_request.onreadystatechange = function()
   {
      if (http_request.readyState == 4  )
      {
         // Javascript function JSON.parse to parse JSON data
         var jsonObj = JSON.parse(http_request.responseText);

         var heading = document.getElementById("heading");
         heading.innerHTML = "Welcome "+jsonObj.mails[0].to+"!";

         if(jsonObj.length == 0)
         {
            var msg = document.getElementById("noContentMessage");
            msg.innerHTML = "Your inbox is empty!";
         }
         else
         {
            var msg = document.getElementById("noContentMessage");
            msg.innerHTML = "";
         }

         var i;
         var rows = "";
         var id, from, subject, date;
         var table = document.getElementById("mailbox");
         table.innerHTML = "";

         var num = document.getElementById("noOfEmails");
         num.innerHTML  = jsonObj.mails.length + " mails";
         
         for (i = 0; i < jsonObj.mails.length; i++) 
         {
            var row = table.insertRow(-1);
            var id = row.insertCell(0);
            var from = row.insertCell(1);
            var subject = row.insertCell(2);
            var date = row.insertCell(3);
            id.innerHTML = jsonObj.mails[i].id;
            from.innerHTML = jsonObj.mails[i].from;
            subject.innerHTML = jsonObj.mails[i].subject;
            date.innerHTML = jsonObj.mails[i].date;
         }
      }
   }
      
   http_request.open("GET", data_file, true);
   http_request.send();
}

function loadSentMail()
{
   var msg = document.getElementById("noContentMessage");
   msg.innerHTML = "You have no sent mail!";

   var table = document.getElementById("mailbox");
   table.innerHTML="";

   var num = document.getElementById("noOfEmails");
   num.innerHTML  = "";
}

function loadDrafts()
{
   var msg = document.getElementById("noContentMessage");
   msg.innerHTML = "You don't have any saved drafts. <br> Saving a draft allows you to keep a message you aren't ready to send yet.";

   var table = document.getElementById("mailbox");
   table.innerHTML="";

   var num = document.getElementById("noOfEmails");
   num.innerHTML  = "";
}

function loadSpam()
{
   var msg = document.getElementById("noContentMessage");
   msg.innerHTML = "Hooray, no spam here!";

   var table = document.getElementById("mailbox");
   table.innerHTML="";

   var num = document.getElementById("noOfEmails");
   num.innerHTML  = "";

   var num = document.getElementById("noOfEmails");
   num.innerHTML  = "";
}

function loadTrash()
{
   var msg = document.getElementById("noContentMessage");
   msg.innerHTML = "Your trash is empty!";

   var table = document.getElementById("mailbox");
   table.innerHTML="";

   var num = document.getElementById("noOfEmails");
   num.innerHTML  = "";
}
    

  