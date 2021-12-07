// const number = 589.45454;
// math.floor
// math.ceil
// math.round

// const random = Math.random();
// const between10 = random * 20;
// const rounded = Math.round(between10);
// console.log(rounded);
const selected = []
for (let i = 0; i < 5; i++) {
    const random = Math.random() * 100;
    const picked = Math.round(random);
    if (selected.indexOf (picked) == -1 ) {
        selected.push(picked);
    }else{
        console.log(`Found Duplicate :`, selected, picked);
    }
}
console.log(selected);