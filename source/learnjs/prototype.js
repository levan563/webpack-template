// Prototype your function
const array = [1,2,3,4,5]

Array.prototype.multBy = function (n){
    console.log(this);
    return this.map(function(i){
        return i * n;
    })
}
console.log(array.multBy(2));
