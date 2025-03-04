function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a-b;
}
function multiply(a, b){
    return a*b;
}
function divide(a, b){
    return a/b;
}
function increment(n){
    return n+1;
}
function decrement(n){
    return n-1;
}
function makeInt(n){
    return parseInt(n, 10);
}
function preserveDecimal(n){
    return parseFloat(n);
}

console.log(add(1, 80))
console.log(subtracts(40, 60))
console.log(multiply(2, 3.4))
console.log(divide(5.0, 2.5))
console.log(increment(5))
console.log(decrement(5))
console.log(makeInt('2'))
console.log(preserveDecimal('2.222'))
console.log(preserveDecimal('sldkjflksjf'))