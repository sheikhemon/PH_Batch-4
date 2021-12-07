const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries();
const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries')  
    countries.forEach(country => {
        const div = document.createElement('div')
        div.classList.add('country');
        div.innerHTML = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick = "loadCountryByName('${country.name}')">Details</button>
        `;
        countriesDiv.appendChild(div)
    });
}

const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
}
const displayCountryDetails = country => {
    console.log(country);
    const detailsDiv = document.getElementById('country-details');
    detailsDiv.innerHTML = `
        <h5>Population: ${country.name}</h5>
        <p>Name: ${country.population}</p>
        <img src="${country.flag}" alt= "" width= "300px">
    `
}