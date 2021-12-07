// 6! = 6*5*4*3*2*1 /* iterative way */
let fact = 1;
for (let i = 6; i >= 1 ; i--) {
    console.log(i);
    fact = fact * i;
}
console.log(fact);

function fact(n) {
    if (n == 1) {
        return 1;
    }
    return fact(n - 1) * n
}
console.log(fact(6));