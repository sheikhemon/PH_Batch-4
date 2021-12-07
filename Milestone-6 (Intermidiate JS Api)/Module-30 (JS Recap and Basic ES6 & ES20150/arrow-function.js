// function declare
function add(num1, num2) {
    return num1 + num2;
}
const sum = add(15, 15);
const add2 = function add2(num1, num2) {
    return num1 + num2;
}
// function expression
const sum2 = add2(10, 10)
// function expression - anonymous 
const add3 = function (num1, num2) {
   return num1 + num2;
}
const sum3 = add3(5, 5);
// arrow function
const add4 = (num1, num2) => num1 + num2 ;
const sum4 = add4(2, 2);
console.log(sum, sum2, sum3, sum4);