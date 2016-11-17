var express = require("express");
var port = process.env.PORT || 3000
var app = express();
var router = express.Router();
var check;

var fs = require('fs');
var data = fs.readFileSync('save.json');
var words = JSON.parse(data);
console.log(words);

app.use('/', express.static('www'));
app.use('/', router);

router.get('/add/:word/:score?', function(req, res){
  var data = req.params;
  var word = data.word;
  var score = data.score;
  var reply;

  if(!score){
    reply = {
      msg: "Score is required."
    }
  }else{
    words[word] = parseInt(score);
    var data = JSON.stringify(words, null, 2);
    fs.writeFile('save.json', data, function(err){
      if(err){console.log(err);}
      console.log("Added to the database effectively :) ");
    });
    reply = {
      word:  word,
      score: score,
      status: "success"
    }
  }
  check = word;
  var keys = Object.keys(data);
  console.log(keys);
  for(var i = 0; i < keys.length; i++){
    var word = keys[i];
    if(word === check){
      res.send('www');
    }
  }
  res.send(reply);
});


router.get('/home', function(req, res){
  res.send({message: "Welcome to froggy"});
});

app.listen(port, function(){
  console.log("server listening on port " + port);
});
