// TypeError: Assignment to constant variable.
const name = 'aiman';
name = 'emon';
console.log(name);

// SyntaxError: Unexpected identifier
const name = 'aiman';
for (let i = 0; i < 10 i++) {}

// TypeError: Cannot read property 'name' of undefined
const name = 'aiman';
const student = undefined;
console.log(student.name);

// try and catch
const name = 'aiman';
const student = undefined;
try {
    name = 'rafik'
} catch (error) {
    console.log('getting eroor', error);
}
console.log(name);
