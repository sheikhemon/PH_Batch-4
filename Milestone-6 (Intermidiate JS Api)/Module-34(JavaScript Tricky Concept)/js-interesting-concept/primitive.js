/* 
7 data types
primitive type 
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol --ES6

Non Primitive Type
7. Object
*/
// Primitive type
let x = 10;
let y = x;
console.log(x, y);
x = 20;
console.log(x, y);

let a = 'hello';
let b = a;
console.log(a, b);
a = 'gelo'
console.log(a, b);

// Non Primitive type

let x = {name: 'sheikh', job: 'web developer'}
let y = x;
x.name = 'emon'
console.log(x, y);