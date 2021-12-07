var age = [12, 15, 45, 75, 86, 85];
var name = [`shafik`, `nabil`, `tamal`, `rajib`, `shuvo`]
// index off define arrays position
var ageIndexOff = age.indexOf(45);
var nameIndexOff = name.indexOf(`nabil`);
// index define arrays name
var defineAgeArray = age[2];
var defineNameArray = name[1];
// Changes index value
var ageChange = age[3] = 55;
var nameChange = name[4]= `sajal`;
// 3 types of answer
console.log(ageIndexOff, nameIndexOff);
console.log(defineAgeArray, defineNameArray);
console.log(ageChange, nameChange);
