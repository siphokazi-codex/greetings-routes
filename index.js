const express = require('express');
const GreetedRoutes = require('./greeted');

const greetedRoutes = GreetedRoutes();
const app = express();

// create a router
app.get('/greetings/:id', function(req, res){
  res.send('Hello ' + req.params.id);
});

app.get('/greeted', greetedRoutes.index);
app.get('/greeted/:username', greetedRoutes.add);

app.get('/counter/:username', greetedRoutes.counter);

//start the server
var server = app.listen(3000, function(){
var host = server.address().address;
var port = server.address().port;

  console.log("App listening athttp://%s:%s", host, port);
});
