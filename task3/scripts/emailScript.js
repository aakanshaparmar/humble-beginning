function loadDoc() {
  // var xhttp = new XMLHttpRequest();
  // xhttp.onreadystatechange = function() {
  //   if (xhttp.readyState == 4 && xhttp.status == 200) {
  //     document.getElementById("emailDetails").innerHTML = xhttp.responseText;
  //   }
  // };
  // xhttp.open("GET", "https://db4.insightglobe.net/career/mail", true);
  // xhttp.send();

   $.ajax({

    url: 'https://db4.insightglobe.net/career/mail',
	type: "GET",
    dataType: "jsonp",
    success: function (msg) {
         document.getElementById('emailDetails').innerHtml=msg;
    },
    error: function () {
        document.getElementById('emailDetails').innerHtml='Error';
    }

});

}
