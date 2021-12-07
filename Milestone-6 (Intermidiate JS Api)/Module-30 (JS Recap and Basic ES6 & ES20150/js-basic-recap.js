var name = 'emon';

if (name.length > 5) {}
if (name.length < 5) {}
if (name.length == 5) {}
if (name.length != 5) {}
if (name.length >= 5) {}
if (name.length <= 5) {}

// array 
const arrNumbers = [45, 15, 67, 45, 78, 25];
const count = arrNumbers.length;
arrNumbers.pop();
arrNumbers.push();
arrNumbers[2] = 20;
console.log(arrNumbers);
// check whether 222 included in the array - Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
if (arrNumbers.indexOf(222) != -1){}
if (arrNumbers.includes(222)){}

// loop
// while and for
for (const person of persons) {}

// function 
function getPersonName (first, second) {
    const person = first + " " + second;
    return person;
}
const personName = getPersonName('abdul', 'Karim')
console.log(personName);

// object
const products = { name: laptop, color: ReadableStream, price: 500000}