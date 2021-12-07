const loadQuotes = () =>  {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayData(data))
}
const displayData = quote => {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote;
}