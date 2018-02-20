var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config= {
    user:'mukeshphulwani66',
    database:'mukeshphulwani',
    host:'http://db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
    
}
var app = express();
app.use(morgan('combined'));

app.use(express.static('ui'));

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

var pool = new Pool(config);
app.get('/test-db',function(){
   //make a select request 
   //return a responce with result
   
   pool.query('SELECT * FROM test',function(err,result){
      if(err){
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result));
      }
   });
   
});

var counter = 0;
app.get('/counter',function(req,res){
  counter = counter+1;
  res.send(counter.toString());
    
});

var names = []; 
app.get('/submit-name',function(req,res){
    
var   name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});


app.get('/:articlename',function(req,res){
    
    
    var articlename = req.params.articlename;
   res.send(createtamplate(articles[articlename])); 
});

// app.get('/ui/style.css', function (req, res) {
//   res.sendFile(path.join(__dirname, 'ui', 'style.css'));
// });

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
