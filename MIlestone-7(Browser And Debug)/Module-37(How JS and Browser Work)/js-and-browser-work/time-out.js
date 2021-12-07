// synchronous ways work
function doSomething() {
    console.log('I am coding javaScript');
}
console.log('first');
console.log('second');
// setTimeout(doSomething, 5000);
setTimeout(function(){
    console.log('VS code');
}, 5000)
setTimeout (() => {
    console.log('Exploring JS');
}, 4000)
console.log('third');