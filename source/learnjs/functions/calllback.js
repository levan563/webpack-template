function runFirstFunction(arg,callback){
    console.log(arg);
    callback(arg);
}
function runSecondFunction(arg){
    console.log(`Yeah secondly i runinng this from previous function + ${arg}`);
}

runFirstFunction('Hello',runSecondFunction);