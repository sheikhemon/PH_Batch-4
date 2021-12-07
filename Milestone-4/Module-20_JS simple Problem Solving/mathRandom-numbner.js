// Math related problem solving

// === math.abs - absolute - Whatever number is given, it turns into addition
// === math.ceil - upper 
// === math.floor - down
// === math.round - The nearest whole number
// === math.random - The numbers come in different ways
// === for with random number

/* const myNumber = -10;
const absNumber = Math.abs(myNumber);
console.log(absNumber); */

/* const myNumber = 25.288544;
const ceilNumber = Math.ceil(myNumber);
console.log(ceilNumber); */

/* const myNumber = 25.9999999;
const floorNumber = Math.floor(myNumber);
console.log(floorNumber); */

/* const myNumber = 30.4999999;
const roundNumber = Math.round(myNumber);
console.log(roundNumber); */

/* const randomNumber = Math.random() * 6;
const randomCeil = Math.ceil(randomNumber);
console.log(randomCeil); */

for (let i = 0; i <= 30; i++) {
    const randomNumber = Math.random() * 6;
    const randomCeil = Math.ceil(randomNumber);
    console.log(randomCeil);
}