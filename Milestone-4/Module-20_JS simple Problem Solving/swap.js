// Swap the values of two variables
let first = 10;
let second = 20;
console.log(first, second);
// == swap values
first = second;
let temp = first;
second = temp;
console.log(first, second);
// == distracting 
[first, second] = [second, first];
console.log(first, second);