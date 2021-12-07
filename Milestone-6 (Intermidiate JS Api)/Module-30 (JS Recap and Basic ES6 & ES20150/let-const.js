const  balance = 1200;
balance = 1300;

let balance = 1200;
balance = 1300;

const useName = 'jan pakhi'
const weTogether = useName + 'amr';
// console.log(weTogether);

// Array
const arrNumbers = [99, 45, 12, 15]
// arrNumbers = [74, 5, 6, 7] - reassign not allowed 
arrNumbers.push(200);
arrNumbers[3] = 300;
// console.log(arrNumbers);
let sum = 0;
for (let i = 0; i < arrNumbers.length; i++) {
    const element = arrNumbers[i];
    console.log(element);
    sum = sum + element;
}

const student = {name: mofiz, ag: 30, height: 5 };
// student.name = mofajjol;
student = {name: mofiz}