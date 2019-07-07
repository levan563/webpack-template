function win(arg){
    console.log(arg);
  };
  function win2(){
    setTimeout(function(){
      console.log("done");
    },6000);
  };
  function lose(arg){
    console.log(arg);
  };
  function checkResault(){
    let promise = new Promise(function(done,dontDone){
      Math.random() > .5 ? done("Good job") : dontDone("Your fail");
    });
    return promise;
  };
  checkResault()
    .then(win)
    .then(win2)
    .catch(lose);