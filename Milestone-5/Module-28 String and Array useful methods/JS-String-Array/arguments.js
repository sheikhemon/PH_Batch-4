function addNumbers(num1, num2) {
    // console.log(arguments[1]);
    let sum = 0;
    for (const num of arguments) {
        sum = sum + num;
    }
    return sum;
}
const result = addNumbers(12, 20, 10, 100);
console.log(result);

function getFullName(firstName, lastName) {
    // const name = firstName + ' ' + lastName;
    let name = '';
    for (const part of arguments) {
        name = name + part + ' ';
    }
    return name;
}
const totalName = getFullName('omuk', 'tomuk', 'hanif', 'songket')
console.log(totalName);