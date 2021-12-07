// Find max of two values, find max of three values

// let business = 450;
// let minister = 700;
// let army = 600;

//=== find 2 values
// if (business > minister ) {
//     console.log(`business man is a bigger person`);
// }else{
//     console.log(`Minister is a bigger person`);
// }

function maxNumber(business, minister, army) {
    if (business > minister && business > army) {
        return business;
    }else if (minister > business && minister > army){
        return minister;
    }else{
        return army;
    }
}
const largest = maxNumber(600, 500, 700);
console.log(largest);

//=== compare 3 values 
// if (business > minister && business > army) {
//     console.log(`business man is a bigger person`);
// }else if (minister > business && minister > army ) {
//     console.log(`Minister is a bigger person`);
// }else{
//     console.log(`army is a bigger person`);
// }

// === max value with math.max
// let maxValue = Math.max(business, minister, army)
// console.log(maxValue);

// write a function to find the smallest three numbers 
