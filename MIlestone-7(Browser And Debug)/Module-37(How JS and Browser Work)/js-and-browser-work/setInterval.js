console.log('first');
/* setInterval(() => {
    console.log('this is time');
}, 3000); */
let time = 0;
const timeId =  setInterval(() => {
    time++
    console.log(time);
    if (time > 15) {
        clearInterval(timeId);
    }
}, 1000);
console.log('second');
