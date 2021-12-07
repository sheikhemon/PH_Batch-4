/* 
            Undefined
    1. variable value not assigned 
    2. function but didn't write return anything - implicit
    3. just wrote return but didn't return anything - explicit 
    4. parameter thar isn't passed
    5. Property that doesn't exist in an object 
    6. accessing array element out of range 
    7. accessing deleted array element 
    8. explicitly set value to undefined 
*/
let first;
console.log(first);

function getUndefined(x, y) {
   const sum = x + y;
}
console.log(getUndefined(5, 5));

function add (a, b) {
    const sum = a + b;
    if (b < 10) {
        return;
    }
    const multiply = a * b;
    return multiply; 
}
console.log(add(5, 7));

function double (a, b) {
    const result = a * b;
    console.log(b);
    return result;
}
double(10);

const objUndefine = {name: 'Emon', role: 'web-developer', address: 'narayanganj'}
console.log(objUndefine.phone);

const arrayUndefine = [54, 12, 412, 20, 36];
console.log(arrayUndefine[5]);

const arrayUndefineDelete = [54, 12, 412, 20, 36];
delete arrayUndefineDelete[2];
console.log(arrayUndefineDelete[2]);

const explicity = undefined;
console.log(explicity);

/* 
    NULL
*/

const myObj = {name: 'aramn', work: 'fluter web dev', salary: null}
console.log(myObj.salary);