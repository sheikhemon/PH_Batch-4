// factorial function with while loop

function getFactorial(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++
    }
    return factorial;
}
const whileFact = getFactorial(6);
console.log(`While loop with factorial number is :`, whileFact);

function getFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}
const whileFact = getFactorial(6);
console.log(`While loop with factorial number is :`, whileFact);

// for loop reverse with factorial

function getFactorial(number) {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial = factorial * i ;
    }
    return factorial;
}
const reverseForFact = getFactorial(5);
console.log(`reverse for with factorial :`, reverseForFact);