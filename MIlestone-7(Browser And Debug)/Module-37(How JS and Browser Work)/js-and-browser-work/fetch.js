// asynchronous type
console.log('Explore Fetch');
console.log('22222');
// setTimeout(() => console.log('Explore Fetch'), 5000);
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
console.log('5555');