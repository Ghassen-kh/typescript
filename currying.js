function add(a , b){
    return a+b;
}

// carrying is a technique that allows us to take a function that has N arguments and convert it to a function that has a single argument 
// N => 1

function add1(a){
    return function(b){
        return a+b;
    }
}

console.log(add(5,2));
console.log(add1(5)(2));

const add2  = a => b => a + b;
console.log(add2(5)(2));



// => this is an arrow 