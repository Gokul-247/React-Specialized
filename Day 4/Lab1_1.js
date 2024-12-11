/*console.log("Task 1");

setTimeout(function () {
    console.log("Task 2 (after a delay)");
}, 5000)

console.log("Task 3");*/

var name1 = "Gokul"
var age = 22
var nativePlace = "Thrissur"
var nation = "India"

console.log(`My name is ${name1}\nMy age is ${age}\nMy native place is ${nativePlace}\nMy nation is ${nation}`);

function add(a,b){
    return a+b
}

const addition = (a,b) => a+b

console.log("------------------------------");
console.log(add(9,9));
console.log(addition(9,5));

const subtraction = (c,d) => {
    return c-d
}

console.log(subtraction(5,5));

const ComplexOutput = function(a,b){
    return a*b
}

console.log(ComplexOutput(5,5));
