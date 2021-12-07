// const sumNumbers = [12, 13, 45, 55, 32, 50];
// let sum = 0;
// for (let i = 0; i < sumNumbers.length; i++) {
//     const number = sumNumbers[i];
//     sum = sum + element;
// }
// console.log(sum);

function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
const array = sumArray([12, 13, 45, 55, 32, 50]);
console.log(array);

var num = [44, 29, 34, 38, 8, 78]
var sum = 0;
for (let i = 0; i <= 3; i++) {
    console.log(num[1]);
    sum = sum + num[i]
}
console.log(`sum =`, sum);