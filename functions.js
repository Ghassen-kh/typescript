const { pipe } = require('lodash/fp');
const compose = require('lodash/fp/compose');
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

const trim = str => str.trim();
let y = "      ghassen     ";
console.log(trim(y));

const wrapInDiv = str => "<div>" + str + "</div>";
let g=wrapInDiv(trim(y));
console.log(g);

// we can render this dynamically : 
const wrapInDivDyn = str => `<div>${str}</div>`;
let h=wrapInDivDyn(trim(y));
console.log(h);

console.log(wrapInDivDyn(trim("    khalouaoui ")));
const toLowerCase = str => str.toLowerCase();

 const transform2 = compose(wrapInDivDyn,toLowerCase,trim);
 const result2 = transform2("    GhassTon   ");

 const transform3 = pipe(trim,toLowerCase,wrapInDivDyn);
 const result3 = transform3("    AHmed   ");

 const result = wrapInDivDyn(toLowerCase(trim(input))); // => this is what we call function composition in functional programming 
console.log(result);
console.log(result2);
console.log(result3);

/*Use Lodash : Lodash is an open-source JavaScript utility library delivering consistency, modularity, performance, & extras.
   Lodash helps programmers to write more concise and maintainable JavaScript. */
   //whenever there are Javascript technologies we can use Lodash
   //Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc. Lodash library can be broken down into several categories. Lodash’s modular methods are great for:
    //- Creating composite functions
    //- Iterating arrays, objects, & strings
    //- Manipulating & testing values


    // Currying : 

    // const wrapInSpan = str => `<span> ${str} </span>`;
    // const wrapInDivDyn = str => `<div>${str}</div>`;
 // ==> we can do this : 
 const wrap = (type, str)=> `<${type}>${str}</${type}>`;
 const transform4 = pipe(trim,toLowerCase,wrap); // undefined 
 const result4 = transform4("    AHmed   ");
console.log(result4);

// ==> that's the purpose of Currying 