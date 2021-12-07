// ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।

// const
const x = 5;
const y = 7;
// x = 5; // - don't reassign value
const result = x + y ;
console.log(result);
// let 
let x = 5;
let y = 7;
x = 8;
let result = x + y ;
console.log(result);

// ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 

let a = 5;
let b = 7;
console.log("I am " + a + ' ' + "and I'm " + b); // Old way
console.log(`I'm ${a} and I'm ${b}`); //- interpolation
console.log(``);
// newest 
const first = `Emon`;
const second = `sheikh`;
const result = `Hlw i'm ${first} ${second}`;
console.log(result);

// old 
const products = {
    name : 'mobile',
    color : 'black',
    model : 'c25s' 
}
const dynamicObj = products.name;
const dynamicObj2 = products.color;
console.log(dynamicObj, dynamicObj2);

// newest
const product = { x: 5, y: 7, a: 10, b: 15 }
const {x, y} = product;
console.log('total 2 property :', x, y);

/* ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে।  */
/* Oldest */
function getInput(x) {
    return x / 5;
}
console.log(getInput(20));
/* Newest */
const getArrow = x =>  x / 5;
console.log(getArrow(30));

/* ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো  */

const getTowParameter = (x, y) => (x + 2) * (y + 2);
console.log(getTowParameter(10 , 10));

/* ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে।  */

const multiplyThreePara = (x, y, z) => x * y * z;
console.log(multiplyThreePara(5, 5, 5));

/* ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।  */

const getTowParameterArrow = (x, y) => {
    const sum = ( x + 2 ) * ( y + 2 );
    return sum;
}
console.log(getTowParameterArrow(5, 5));

/* ৪. [হোম ওয়ার্ক] একটু গুগলে সার্চ দাও: javascript function declaration vs arrow function তারপর কয়েকটা আর্টিকেল পড়ে বুঝার চেষ্টা করো।  */

/* Javascript Function declare */
const a = 5;
const b = 7;
let add = function(x, y) {
    return a + b;
}
console.log(add(a, b));
function oldFunc(x, y) {
    return x +  y
}
console.log(oldFunc(5, 5));
/* javascript arrow function */
const arrowFunc = (x, y) => x + y ;
console.log(arrowFunc(5, 5));

/* ৪.৫. [এক্সট্রা আরেকটা হোম ওয়ার্ক। এইটা ভিডিওতে বলা নাই]: জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি?  */
/* ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।  */

// oldest
/* const arr = [5, 10, 15, 20];
const output = [];
function doubleIt(arr) {
    return arr * 5 ;
}
for (const array of arr) {
    const result = doubleIt(array);
    output.push(result);
    console.log(output);
} */

const arr = [5, 10, 15, 20];
// function doubleIt(arr) {
//     return arr * 5 ;
// }
const doubleIt = arr => arr * 5;
const output = arr.map(doubleIt);
console.log(output);

// newest one line code
const arr = [5, 10, 15, 20];
const num = arr.map(arr => arr * 5)
console.log(num);

/* ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো  */

const getOddNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const odd = getOddNumber.filter( n => n % 2 )
console.log(odd);

/* ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো।  */
const products = [
    {name: 'apple', color: 'red', price: 4000},
    {name: 'apple', color: 'red', price: 5000},
    {name: 'apple', color: 'red', price: 500},
    {name: 'apple', color: 'red', price: 200}
];
const result = products.find(product => product.price == 5000);
console.log(result);

/* ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো।  */
/* ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।  */
const user = {
    id: 330,
    name: 'sojib',
    age: '24'
}
let name = user.name;
console.log(name);
/* ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে।  */
const [ami, tmi , lol] = [45, 50, 'Sakira', 30];
const three = lol;
console.log(three);

/* ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭।  */

const threeP = (x, y, z = 7) => x + y + z;
console.log(threeP(5, 10));

/* [অপশনাল]
১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট ) */

const nestedP = {
    company: 'reactJoss',
    author: {id: 1, name: 'aiman', role: 'CEO'},
    employee: {total: 25, target: 'SCIC', Course: '6 month',

    }
}