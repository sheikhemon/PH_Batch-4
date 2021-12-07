const fish = {id: 1, name: 'Hilsha', color: 'silver', number: '017144454574', price: 10000, address: 'candpur'};
const {id, price, number,} = fish;

console.log(id, price, number);

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
// const address = company.author.address
const {name, address} = company.author
const {work, framework} = company.website;
const {first} = company.website.tech;
console.log(name, address, work, framework, first);