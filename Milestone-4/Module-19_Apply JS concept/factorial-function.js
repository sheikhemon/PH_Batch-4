// factorial Calculate With Function 
/*
let factorial = 1;
for (let i = 1; i <= 5; i++) {
    factorial = factorial * i;
} 
console.log(factorial); */

function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
let totalFactorial = getFactorial(5);
console.log(`Number of factorial :`, totalFactorial);

let secondFact = getFactorial(7);
console.log(`Number of factorial :`, secondFact);

let thirdFact = getFactorial(5);
console.log(`Number of factorial :`, thirdFact);