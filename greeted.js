module.exports = function(){

  const greetedList = [];
  const counterMap = {};

  const getForm = function(req, res){
    res.render('greetings/index');
  };

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
      //res.render('greetings/index', {message: 'Hello, ' + username});
      req.flash('greetMessage', 'Hello, ');
    }
    else {
      req.flash('error', 'Name already exists!');
    }
  }

  if(counterMap[username] === undefined){
      counterMap[username] = 0;
    }
    counterMap[username] ++;
    const greetedCounter = counterMap[username]

    res.render('greetings/index', {greetings : username});

  }

  const counter = function(req,res){

  var username = req.body.username;
  const greetedCounter = counterMap[username];
  res.send("Hello,"+ " " + username + " " +"has been greeted" +" " + greetedCounter +" "+"time(s)")

  }

  return {

    getForm,
    add,
    counter
  }
}
