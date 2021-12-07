const API_KEY = `46cab15135a9423840c4d152fc2bdf35`;
const weatherBtn = () => {
    const city = document.getElementById('weather-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperature => {
    setInnerText('city-name', temperature.name)
    setInnerText('temp', temperature.main.temp)
    setInnerText('cloud', temperature.weather[0].main)
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url)
}