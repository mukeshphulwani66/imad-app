

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

//submit name

var submit =  document.getElementById("submit_btn");
submit.onclick = function(){
   //create a request object
     var Request = new XMLHttpRequest();
      
      // capture the responce and store in a variable 
    Request.onreadystatechange = function(){
        if(Request.readyState === XMLHttpRequest.DONE){
            if(Request.status === 200){
              var names = Request.responseText;
              names = JSON.parse(names);
var list = "";
for(var i = 0; i<names.length; i++){
    
    list += '<li>'+names[0] +'</li>';
}
    
    var ul = document.getElementById("namelist");
    ul.innerHTML =list;
            }
        }
    }
    
var nameinput =  document.getElementById("name");
var name = nameinput.value;
Request.open('GET','http://mukeshphulwani55.imad.hasura-app.io/submit-name?name='+name,true);
  Request.send(null);
    
    
}