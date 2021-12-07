const numbers = [3, 4, 5, 6, 45, 48, 56, 10];
// slice
const numberSliced = numbers.slice(3, 6);
console.log(numberSliced);
console.log(numbers);

// splice to remove an element from an array
const numberSpliced = numbers.splice(3, 3)
console.log(numberSpliced);
console.log(numbers);

// another splice 
const numberSpliced2 = numbers.splice(3, 0, 151, 152, 153)
console.log(numberSpliced2);
console.log(numbers);