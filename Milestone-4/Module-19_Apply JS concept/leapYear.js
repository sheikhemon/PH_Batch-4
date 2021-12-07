// Leap Year Check With Function
// -- not leap year but functionally leapYear 
// The years 1900, 2100, 2200, 2300, 2500, 2600, 2700, 2900 and 3000 are not leap years.
function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    return false;
}
const myLeapYear = 2024;
const isMyYearLeapYear = isLeapYear(myLeapYear);
console.log(`Is that leap year :`, isMyYearLeapYear);

const herLeapYear = 2028;
const isHerLeapYearNumber = isLeapYear(herLeapYear);
console.log(`Is that leap year :`, isHerLeapYearNumber);