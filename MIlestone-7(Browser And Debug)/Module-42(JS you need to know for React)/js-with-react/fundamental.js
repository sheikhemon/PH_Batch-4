// 1. How to declare a variable using let and const
const fatherName = "name can't be changed"
let season = 'rainy';
season = 'winter'

/*
 2. How to declare Condition 
 [6 Basic condition(<, >, ====, !==, <=, >=,)]
 Multiple Condition: &&, || 
*/
if (fatherName === "name can't be changed" || season === 'rainy') {
    console.log('|| or declare is 1 is true');
} else if (fatherName === "name can't be changed") {
    console.log('another condition');
} else {
    console.log('last trial');
}

/* 
 3. Array Declare 
 - Index,
 - Length, push, pop
*/
const number = [45, 46, 85, 65, 25]
number[0] = 56;

/*
 4.Loop Declare
 - Basic For loop 
 - Basic While loop
*/
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    console.log(element);
}

/*
 5. Simple Function Declare
*/
function multiplication(num1, num2) {
    const multiply = num1 * num2;
    return multiply;
}
console.log(multiplication(2, 2));

/* 
 6. Object Declare 
 - 3 ways to access property by name
*/
const student = {
    name: 'Aiman',
    Age: 24,
    Movies: ['king kong', 'Khirsnamuti']
}
const withVar = 'age'
console.log(student.Age); //-> Direct by property 
console.log(student['age']); //-> access via property name string 
console.log(student[withVar]); //-> access via property name in a variable