//Lexical Environment
function leExample(arg1,arg2){
    function showResualt(){
    console.log(`${arg1} + ${arg2}`);
    }
    showResualt();
}
leExample('Hello', 'World');