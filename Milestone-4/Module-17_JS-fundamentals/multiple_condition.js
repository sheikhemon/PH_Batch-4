var gotJob = false;
var savingsMoney = 350000;
var buyFlat = false;
var hasHouse = true;
var fixedSalary = 30000;
// if (gotJob == true && savingsMoney > 200000) {
//     console.log(`You can give a proposal for married`);
// } else {
//     console.log(`First grow with your ability then contact with us`);
// }
if ((gotJob == true && savingsMoney > 200000 && buyFlat == true) || hasHouse == true || fixedSalary > 50000) {
    console.log(`You can give a proposal for married`);
} else {
    console.log(`First grow with your ability then contact with us`);
}