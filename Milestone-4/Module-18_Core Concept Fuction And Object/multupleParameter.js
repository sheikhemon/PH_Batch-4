// Declare function with multiple parameter
// summation with multiple parameter
function addMultipleNumbers(num1, num2) {
    console.log(num1, num2);
    var total = num1 + num2;
    return total;
}
var firstNumber = 75;
var secondNumber = 80;
var totalSum = addMultipleNumbers(firstNumber , secondNumber);
console.log(`result :`, totalSum);

// multiply with multiple parameter
function multiply(number1, number2) {
    var multiplyTotal = number1 * number2;
    return multiplyTotal;
}
var total = multiply(2, 100);
console.log(`Total Multiply Number is :`, total);

// Subtraction with multi parameter
function subtractionTow(num1, num2) {
    var subtractionTotal = num1 - num2;
    return subtractionTotal;
}
var total = subtractionTow(50, 30);
console.log(`Total Subtraction Number is :`, total);

// divided with multi parameter
function dividedTow(num1, num2) {
    var dividedTotal = num2 / num1;
    return dividedTotal;
} 
var total = dividedTow(50, 100);
console.log(total);