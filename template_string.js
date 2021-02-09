// Before template string 

var name = 'Md Abdullah Fardus';
var greet = 'Welcome Mr. ';
var greet_msg = greet + name + ' to our service vila';
console.log(greet_msg);

// After template string 

var full_name = 'Md Abdullah Fardus';
var tnx_msg = `Thank you Mr. ${full_name} for visiting our service center`;
console.log(tnx_msg);

console.log(`"${full_name}" is learining JS`);

// template string in funciton 

let first_name = 'Md. Abdullah';
let last_name = 'Fardus';

const hello = (first_name,last_name) => {return `${first_name} ${last_name}`};
console.log(`Hello ${hello(first_name, last_name)}`)