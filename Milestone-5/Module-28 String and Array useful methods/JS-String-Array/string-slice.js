const anthem = 'Amar sonar bangla Ami tmy bhalobashi';
const word = anthem.split(' ');
const withoutA = anthem.split('a');
// console.log(word, withoutA);

// slice
const sliceLetter = anthem.slice(3, 11);
console.log(sliceLetter);
// substr
const subStr = anthem.substr(11);
console.log(subStr);
// sub string
const subString  = anthem.substring(11);
console.log(subString);
// concat 
const first = 'aiman';
const second = 'sheikh';
const concatName = first + second;
const concatName2 = first.concat(second).concat('is a clever boy')
console.log(concatName, concatName2);
// join 
const someLetter = ['a', 'b', 'c', 'd', 'e'];
// const join = someLetter.join('');
// const join = someLetter.join(' ');
// const join = someLetter.join(',');
// const join = someLetter.join(', ');
const join = someLetter.join(' a');
console.log(join);
