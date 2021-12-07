const loadRandom = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayRandom(data))
}
loadRandom()
const displayRandom = data => {
    const randoms = data.results;
    const randomDiv = document.getElementById('random')
    for (const random of randoms) {
        console.log(random);
        const p = document.createElement('p');
        p.innerText = `name: ${random.name.first} ${random.name.last}
            email: ${random.email}
        `;
        randomDiv.appendChild(p)
    }
}