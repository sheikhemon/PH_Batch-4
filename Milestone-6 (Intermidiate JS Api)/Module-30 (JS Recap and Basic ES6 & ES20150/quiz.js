function getSum(a, b = 9){
    return a + b;
}
console.log(getSum(2, 7));

const y = x => x * x; 
const x = y(5);
console.log(x);

const name = 'Hero'; 
const greetings = `Welcome Home! ${name}`;
console.log(greetings);

const  division =  num1, num2 => console.log(4 /2)

const numbers = [10,20,30,40,50,60,70 ];
const newNum = Math.max(...numbers);
console.log(newNum);

const cars = ['toyota', 'honda','mercedes']; 
const newCars = [...cars , 'ferrari'];
console.log(newCars);