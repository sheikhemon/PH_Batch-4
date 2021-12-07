// Declare variable based of the name of an object property
const myObject = { x: 1, y: 2, a: 1, b: 5}
const { x } = myObject;
console.log(x);

// declare with destructuring array
const [ p, q ] = [ 20, 40];
console.log(p, q);

// 1 line declare 
const [best, faltu] = [ 'rajib', 52 ]; 
console.log(best, faltu);

const company = {
    companyName: 'GP',
    author: { id: 1, name: 'Emon', address: 'Narayanganj', mobile: '018145454' },
    website: {work: 'website development', employee: 22, framework: 'react',
        tech: {
            first: 'developer',
            second: 'java',
            third: 'angular',
        },
    },
};
console.log(company.author?.currentValue);
console.log(company.website?.backend?.first);