// 3types of on click

function makeRed() {
    document.body.style.background = 'red';
}
const blueButton = document.getElementById('btn-bg-blue');
blueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.background = 'blue';
}
// anonymous
const greenBtn = document.getElementById('btn-bg-green');
greenBtn.onclick = function () {
    document.body.style.backgroundColor = 'green'
}
// add event listener  
const purpleBtn = document.getElementById('btn-bg-purple');
purpleBtn.addEventListener('click', btnPurple)
function btnPurple() {
    document.body.style.backgroundColor = 'purple'
}
const pinkBtn = document.getElementById('btn-bg-hotPink');
pinkBtn.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink'
} )

// direct shortcut
document.getElementById('btn-bg-gray').addEventListener('click', function () {
    document.body.style.backgroundColor = 'gray';
})
