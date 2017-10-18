const path = require('path');
const express = require('express');
const app = express();

var port = 3000;

app.use(express.static(path.join(__dirname,'public')))

app.get('/', function(req,res){
  res.SendFile('index.html');
})

app.get('/food',function(req,res){
  res.SendFile(__dirname + '/public/food.html');
});

app.listen(port);
