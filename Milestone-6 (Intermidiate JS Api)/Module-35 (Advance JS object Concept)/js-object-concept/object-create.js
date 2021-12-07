// 1.  Using Object literal
const student = {
    name: 'sakibal hasan',
    job: 'cricketer'
}
// 2. object constructor
const person = new Object()

// 3. object inheritance 
// const human = Object.create()
const human = Object.create(student)
console.log(human.name);

// 4. syn tech tical sugar -- prototypical way
class People {
    constructor (name, age) {
        this.name = name;
        this.age = age
    }
}
const peop = new People('sakib khan', 12)
// console.log(peop);

function Manus(name) {
    this.name = name;
}
const man = new Manus('jhon');
console.log(man);
