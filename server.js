var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    articleone:{
     heading:"i am heading one",
     content:
        "<p>i am first para</p>"
        
    },
    articletwo:{
        heading:"i am heading two",
          content:
       " <p>i am second para</p>"
    }
    
}

function createtamplate(data){
    var heading=data.heading;
    var  content=data.content;

var htmltemplate =
`
<html>
<head></head>
<body>
<h1>${heading}</h1>
<div>${content}<div>

</body>
</html>
`;

return htmltemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter',function(req,res){
  counter = counter+1;
  res.send(counter.toString());
    
});



app.get('/:articlename',function(req,res){
    
    
    var articlename = req.params.articlename;
   res.send(createtamplate(articles[articlename])); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

 app.get('/ui/main.js', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'main.js'));
 });


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
