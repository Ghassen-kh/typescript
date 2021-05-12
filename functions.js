function sayHello(){
    return "Hello World";
}

let fn = sayHello;
fn()
sayHello()
// the same 

function greet(fnMessage) {
    console.log(fnMessage());
}
greet(sayHello);

//i'm not calling this function (sayHello) i'm just passing a reference to it 
function sayHello2(){
    return function(){
        return "Hello Ghassen";
    }
}

let fn2 = sayHello2();
let message2 = fn2;
greet(message2);

console.log(message2());

// Higher order functions : is a function that takes a function as an argument or return a function or both 
// map is an example of higherorder functions
let numbers = [1,2,3];
let numbers1 = numbers.map(x => x * 2);  // x => x * 2 : this is a function passed as an argument

console.log("=========================");
console.log(numbers);
console.log("=========================");
console.log(numbers1);

// The setTimeout function : which is a higher order function because it takes a function as an argument
setTimeout(()=> console.log("Hello"),1000);

// *************Function Composition**************

let input = "      JavaScript    ";
console.log(input); // we have here an input variable (JavaScript) with a padding 
console.log(input.trim());
let output = "<div>" + input.trim() + "</div>";
console.log(output);

// First we need to trim the input then wrap it inside a div element 
// Another implementation : 

const trim = z => z.trim();
let y = "      ghassen     ";
console.log(trim(y));