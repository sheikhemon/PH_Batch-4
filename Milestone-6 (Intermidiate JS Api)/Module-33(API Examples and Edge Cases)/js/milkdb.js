const searchBtn = document.getElementById("button-search");
const searchInput = document.getElementById("input-field");

searchInput.addEventListener("keypress", function (event) {
    // event.preventDefault();
    if (event.key === 'Enter')
        searchBtn.click();
});

const btnSearch = () => {
    const inputField = document.getElementById('input-field')
    const fieldText = inputField.value;
    inputField.value = '';
    if (fieldText == '') {
        // pease write something display
    } else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${fieldText}`
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals))
    }
}
const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result')
    searchResult.innerHTML = '';
    if (meals.length == 0) {
        // 
    }
    meals.forEach(meal => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
            <div onclick="loadMealDetail(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    })
}
const loadMealDetail = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}
const displayMealDetails = meal => {
    console.log(meal);
    const mealDetailsDes = document.getElementById('meal-detail')
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 50)}</p>
        </div>
    `;
    mealDetailsDes.appendChild(div)
}