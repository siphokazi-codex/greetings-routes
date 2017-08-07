const express = require('express');
const exphbs = require('express-handlebars');

const bodyParser = require('body-parser');
const GreetedRoutes = require('./greeted');

const greetedRoutes = GreetedRoutes();
const app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Including your public folder, to have access of the contents in there.
app.use(express.static('public'))

// parse application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))

// create application/json parser
app.use(bodyParser.json())

app.get('/greeted', greetedRoutes.getForm);

app.post('/greeted', greetedRoutes.add);

//start the server
var server = app.listen(3000, function(){
var host = server.address().address;
var port = server.address().port;

  console.log("App listening athttp://%s:%s", host, port);
});
