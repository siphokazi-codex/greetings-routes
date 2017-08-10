module.exports = function(){

  const greetedList = [];
  const counterMap = {};

  const index = function(req, res){
    res.render('greetings/index', {greetings : greetedList});
  };

  const addScreen = function(req, res) {
      res.render('greetings/add');
  }

  const add = function(req, res){

  var username = req.body.username;

  var foundName = greetedList.find(function(currentName){
    return currentName === username;
  });


  if(username && !foundName){
    greetedList.push(username);
    //req.flash('greetMessage', 'Hello')

  }

  if(counterMap[username] === undefined){
      counterMap[username] = 0;
    }
    counterMap[username] ++;
    const greetedCounter = counterMap[username]

    res.redirect('/greeted');
    //res.redirect('greeted/add');

  }

  const counter = function(req,res){

  var username = req.params.username;

  //var username = req.body.username;
  console.log(counterMap[username]);
  const greetedCounter = counterMap[username];
  res.send("Hello,"+ " " + username + " " +"has been greeted" +" " + greetedCounter +" "+"time(s)")

  }

  return {

    index,
    add,
    counter,
    addScreen
  }
}
