// inches to feet and mile to kilometer convert 
// inches to feet
function inchToFeet(inches) {
    let feet = inches / 12;
    return feet;
}

let dadaInch = 100;
let dadaFeet = inchToFeet(dadaInch);
console.log(`This is Dada Inches`, dadaFeet);

let dadiInch = 150;
let dadiFeet = inchToFeet(dadiInch)
console.log(`This is Dadi Inches`, dadiFeet);

let nanaInch = 200;
let nanaFeet = inchToFeet(nanaInch);
console.log(`This is Nana Inches`, nanaFeet);

// mile to km

// function mileToKilometer(miles) {
//     let km = miles * 1.6093;
//     return km;
// }
// let marathon = mileToKilometer(26.2);
// console.log(`Marathon in Kilometer`, marathon);