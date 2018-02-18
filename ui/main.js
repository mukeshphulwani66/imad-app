

var button = document.getElementById("counter");
button.onclick = function(){
   //create a request object
     var Request = new XMLHttpRequest();
      
      // capture the responce and store in a variable 
    Request.onreadystatechange = function(){
        if(Request.readyState === XMLHttpRequest.DONE){
            if(Request.status === 200){
               var counter = Request.responseText
                  var span = document.getElementById("count");
                 span.innerHTML = counter.toString();
            }
        }
    }
 // make request
 Request.open('GET','http://mukeshphulwani55.imad.hasura-app.io/counter',true);
  Request.send(null);
  
}