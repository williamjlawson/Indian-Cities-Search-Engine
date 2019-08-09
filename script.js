const endpoint = 'https://indian-cities-api-nocbegfhqg.now.sh/cities'
let cities = [];

fetch(endpoint)
    .then(res => res.json())
    .then(json => cities = json);


function findCity(event) {
    
    const searchValue = document.querySelector("input").value
    if(searchValue.length >= 2) {
        const foundCities = cities.filter(city => city.City.includes(searchValue))
        const cityList = document.querySelector(".city-list")
    
        let cityHTML = ""
    
        for (let i = 0; i < foundCities.length; i++) {
            const city = foundCities[i];
            const listItem = "<li>" + city.City + "</li>"
            cityHTML += listItem
        }
    
        
    
    
        cityList.innerHTML = cityHTML
    }
} 

