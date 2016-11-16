var express = require("express");
var port = process.env.PORT || 3000
var app = express();

app.use(express.static('www'));
app.get('/', function(req, res){
  res.send({message: "Welcome to froggy"});
});

app.listen(port, function(){
  console.log("server listening on port " + port);
});

module.exports = app;
