const data={ result: [ {userName: {title:'Mr.',name:"sakib khan"} } ] }
const nameData = data.result[0].userName.name;
console.log(nameData);

const p = [1,2,3];
const q = p.map(n => Math.pow(n, 3));
console.log(q);

const path = "images/cat.jpg";
const div= document.createElement('div');
div.innerHTML = `<img src= "${path}"alt = "">`;

const url = `https://www.themealdb.com/api/json/v1/1/search.php?s={food}`;

const bondCode=` I am Fake James bond . My new code is: 00${7+1+2}`
console.log(bondCode);

const loadDetail = name => {
    
}