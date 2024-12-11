/*const age = 19

let isAdult = age>= 18 ? "Adult" : "minor"

console.log(isAdult)*/

/*var count = 1
count+=5
console.log(count);*/

/*let day = "monday"
let message;

switch(day){
    case "monday":
        message = "New week has started"
        break;
    case "wednesday":
        message = "Middle of week"
        break;
    case "sunday":
        message = "Its weekend"
        break;
    default:
        break;                          
}

console.log(message);*/

/*for(let i=0;i<5;i++){
    if(i==3){
        console.log(i);
    }
    console.log(i);
}

let count = 0;

while(count<5){
    console.log(count);
    count++;
}

let x = 0;*/

/*function line(){
    console.log("-----------------------------")
}

function A(){
    var varA = 10
    return varA*varA
}

function B(){
    var varB = 5
    return varB*varB
}

function C(){
    var varC = 2
    return varC*varC
}

function finalFunc(){
    let result = A() + B() + C()
    console.log(result);
}

finalFunc()
line()

function addnum(a,b){
    console.log("Addition of two numbers ", a+b);
}

addnum(10,20)

line()

console.log(addnum(10,20));

line()

function subnum(c,d){
    return c-d;
}

console.log(subnum(80,10));
*/

var a = 10
a = 20
console.log(a);

let b = 10
b = 19
console.log(b);

const c = 10
c = 89
console.log(c);

var a = 10
function A(){
    if(true){
        var b = 9
        console.log("Inside if block");

        console.log(b);
    }
    console.log("Inside a function")  
}