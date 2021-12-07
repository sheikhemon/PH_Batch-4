// ===================//
    // even and odd with function
//====================//
// const number = 4;
// const reminder = number % 2;
// console.log(number % 2 == 0);

// --- Even Number
function isEven(number) {
    if (number %2 == 0 ) {
        return true;
    }else{
        return false;
    }
}
const myNumber = 1641;
const isEvenMyNumber = isEven(myNumber);
console.log(`My Even Number is :`, isEvenMyNumber);
const herNumber = 1892;
const herEvenNumber = isEven(herNumber);
console.log(`Her Even Number is :`, herEvenNumber);

// --- Odd Number 
function isOdd(number) {
    if (number %2 != 0) {
        return true;
    }else {
        return false;
    }
}
const isMyNumberOdd = isOdd(myNumber);
console.log(`My Odd number is :`, isMyNumberOdd);
const herOddNumber = isOdd(herNumber)
console.log(`Her Odd Number is :`, herOddNumber);