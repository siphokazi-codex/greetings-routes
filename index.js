const express = require('express');
const exphbs = require('express-handlebars');

const bodyParser = require('body-parser');
const GreetedRoutes = require('./greeted');

const flash = require('express-flash');
const session = require('express-session');

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

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 * 30 }}));
app.use(flash());

app.get('/greeted', greetedRoutes.index);
//app.get('/greetings', greetedRoutes.add);
app.get('/greetings/add', greetedRoutes.addScreen);
app.post('/greetings/add', greetedRoutes.add);
app.get('/counter/:username', greetedRoutes.counter);
app.get('/counter', greetedRoutes.counter);

//start the server
var server = app.listen(3000, function(){
var host = server.address().address;
var port = server.address().port;

  console.log("App listening athttp://%s:%s", host, port);
});
