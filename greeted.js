module.exports = function(){

  const greetedList = [];
  const counterMap = {};

  const index = function(req, res){
    res.render('greetings/index', {greetings : greetedList});
  };

  const add = function(req, res){

  var username = req.params.username;

  var foundName = greetedList.find(function(currentName){
    return currentName === username;
  });

  if(username && !foundName){
    greetedList.push(username);
  }

  if(counterMap[username] === undefined){
      counterMap[username] = 0;
    }
    counterMap[username] ++;
    const greetedCounter = counterMap[username]

    res.send('Hello ' + username)
    //;res.redirect('/greeted');

  }

  const counter = function(req,res){

  var username = req.params.username;
  console.log(counterMap[username]);
const greetedCounter = counterMap[username];
  res.send("Hello,"+ " " + username + " " +"has been greeted" +" " + greetedCounter +" "+"time(s)")

  }

  return {

    index,
    add,
    counter
  }
}
