// factorial calculate with for loop
/*
2! = 2*1 
3! = 3*2*1
4! = 4*3*2*1
5! = 5*4*3*2*1
6! = 6*5*4*3*2*1
7! = 7*6*5*4**3*2*1 
*/
let factorial = 1;
for (let i = 1; i <= 7; i++) {
    factorial = factorial * i ; 
}
console.log(factorial);