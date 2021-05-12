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