function closure() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
}
let clock1 = closure();
let clock2 = closure();
let clock3 = closure();
console.log(clock1());
console.log(clock2());
console.log(clock3());