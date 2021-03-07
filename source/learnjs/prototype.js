// Prototype your function
const array = [1,2,3,4,5]

Array.prototype.multBy = function (n){
    console.log(this);
    return this.map(function(i){
        return i * n;
    })
}
console.log(array.multBy(2));

// Check is odd Function
Number.prototype.isOdd = function (){
    if(this & 1){
        return false
    }else{
        return true;
    }
}

const some = 2;
console.log(some.isOdd());
