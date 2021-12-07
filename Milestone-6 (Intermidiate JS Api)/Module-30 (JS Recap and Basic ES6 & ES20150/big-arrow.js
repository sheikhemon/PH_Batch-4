// 2 parameter 
const add = (num1, num2) => num1 + num2;
const result = add(10, 10);

// multiply with arrow - implicit return
const add2 = (num1, num2, num3) => num1 * num2 * num3;
const result2 = add2(5, 5, 5)

const fiveTimes = (num) => num * 5;
const result3 = fiveTimes(10)

const tenTimes = num => num * 10;
const result4 = tenTimes(10);

const getName = () => 'Emon Sheikh';
const result5 = getName();

const doMath = (x, y) => {
    const add = x + y ;
    const minus = x - y ;
    const addMinus = add * minus;
    const result = addMinus * 5 ; 
    const output = result;
    return output;
} 
const total = doMath(10, 10)
console.log(total);