/*
    1. let and const block scope
    2. global scope using outside function
    3. block scope - condition 
*/
// Global scope 
const a = 5;
const b = 7;
const result = a + b;

function add(a, b) {
    const sum = a + b; // - local scope 
    return sum;
    if (sum > 10) {
        const mood = 'happy';
        console.log(mood); // - block scope 
    }
}
console.log(add());
console.log(result);