// Create a Fibonacci Series using a for loop

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
/*
nth = (n-1) + (n-2);
ith = (i-1) + (i-2)
*/

/* const fibo = [0, 1];
for (let i = 2; i < 10; i++) {
    fibo[i] = fibo[i - 1] + fibo [i - 2];
}
console.log(fibo); */

function FibonacciSeries(num) {
    if (typeof num != `number`) {
        return `Please give a number`
    }
    if (num < 2) {
        return `please enter the positive number grater than 1`
    }
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo [i - 2];
    }
    return fibo;
}
const totalFibo = FibonacciSeries(10);
console.log(totalFibo);