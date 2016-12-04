function redirectPage(){
  var value = false;
  if(value === false){
    window.location.href = "https://froggy-game.herokuapp.com/delete";
    setTimeout(function(){
      window.location.href = "https://froggy-game.herokuapp.com";
    }, 10);
    value = true;
  }
}
