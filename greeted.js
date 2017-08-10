module.exports = function(){

  const greetedList = [];
  const counterMap = {};

  const getForm = function(req, res){
    res.render('greetings/index');
  };

  const addScreen = function(req, res) {
    res.render('greetings/add');
}

  const add = function(req, res){

  var username = req.body.username;

  var foundName = greetedList.find(function(currentName){
    return currentName === username;
  });

  if (!username) {
    req.flash('error', 'Name should not be blank');
  }
  else {
    if(!foundName){
      greetedList.push(username);
      console.log(username);
      //res.render('greetings/index', {message: 'Hello, ' + username});
      req.flash('greetMessage', 'Hello, ');
    }
    else {
      req.flash('error', 'Welcome back, ' + username);
    }
  }

  if(counterMap[username] === undefined){
      counterMap[username] = 0;
    }
    counterMap[username] ++;
    const greetedCounter = counterMap[username]

    res.render('greetings/index', {greetings : greetedList});
    //res.redirect('/greeted');
    //res.render('greetings/index', {username : greetedList});

  }

  const counter = function(req,res){

  var username = req.params.username;
  const greetedCounter = counterMap[username];
  res.send("Hello,"+ " " + username + " " +"has been greeted" +" " + greetedCounter +" "+"time(s)")

  }

  return {

    getForm,
    add,
    counter,
    addScreen
  }
}
