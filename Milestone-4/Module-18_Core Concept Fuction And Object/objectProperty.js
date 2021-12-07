// Object Property Declare 
var computer = {
    price: 30000,
    storage: `256gb`,
    color: `silver`,
    processor: `Intel core i5`
}
console.log(computer);
console.log(`My computer price :`, computer.price);

/* Difference way to define property */
var computerPrice = computer.price;
console.log(`1st type of property define :`, computerPrice);

/* Set difference type of property value */
// 1st type of value define priceValueChange);
// 2nd type of value define price);
// 3rd type of value define computer.price);

var priceValueChange = `price`;
computer[priceValueChange] = 28000;

computer[`price`] = 27000;
computer.price = 25000;
console.log(computer);