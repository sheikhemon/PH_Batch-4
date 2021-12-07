function welcomeMessage (name, greetHandler) {
    greetHandler(name);
}
function greetMorning (name) {
    console.log('good morning', name);
}
function greetAfternoon (name) {
    console.log('good Afternoon', name);
}
function greetEvening (name) {
    console.log('good morning', name);
}
welcomeMessage("Tom hanks", greetMorning)
welcomeMessage("Tom Crouse", greetAfternoon)
welcomeMessage("Tom Barlee", greetEvening)


const names = 'Tom Hanks';
welcomeMessage(names)
const namesArr = ['Tom Hanks', 'Tom Crouse', 'Tom Barlee']
welcomeMessage(namesArr)
const myObj = {name: 'Emon', Id: 45}
welcomeMessage(myObj)