const numbers = [2, 4, 6, 8, 10];
const output2 = [];
// function doubleOld(number) {
//     return number * 2;
// }
const doubleIt = number => number * 2;
for (const number of numbers) {
    const result = doubleIt(number);
    output2.push(result);
}
// console.log(output2);
// 1. loop
// 2. element diye function k call korsi 
// 3. result akta array er moddhe push korsi

// const output = numbers.map(doubleIt);
// const output = numbers.map( x => x * 2);
const square = numbers.map( x => x * x);
console.log(square);