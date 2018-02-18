

var button = document.getElementById("counter");
alert('loaded');
button.onclick = function(){

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

  
}