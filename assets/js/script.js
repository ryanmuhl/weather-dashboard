
var cityContainer = document.querySelector("#city-list");
var currentCityContainer = document.querySelector("#current-city-info")
var fiveDayWeather = document.querySelector("#five-day-container")


$("#search-city").click(function (event) {
    event.preventDefault()
    
    // console.log(event.target)
    latLong();
    
});


var latLong = function () {
    cityName = $("#type-city-name").val();

    var requestUrlLink = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=ebf599dc48a9abbd47ad19f67bdf029f"


    fetch(requestUrlLink, {
    })
        .then(function (response) {
            // console.log(response)
            return response.json();
        })

        .then(function (data) {
            var lati = data.coord.lat
            var longi = data.coord.lon
            citySearch(lati, longi)

            var currentCity = data.name
            

            var currentDate = moment.unix(data.dt).format("MM/DD/YYYY")

            appendCity(currentCity, currentDate)
            

        });

    }




var citySearch = function (coord1, coord2) {

    var reuquestUrlFinal = "https://api.openweathermap.org/data/2.5/onecall?lat=" + coord1 + "&lon=" + coord2 + "&units=imperial&appid=ebf599dc48a9abbd47ad19f67bdf029f"
    // console.log (reuquestUrlFinal)

    fetch(reuquestUrlFinal, {
    })
        .then(function (response) {
            // console.log(response)
            return response.json();


        })

        .then(function (data) {
            console.log(data)
            var temp = data.current.temp
            var wind = data.current.wind_speed
            var humidity = data.current.humidity
            var uvIndex = data.current.uvi
            currentData(temp, wind, humidity, uvIndex)

            renderForcast (data.daily);
        });

}

var appendCity = function (cityList, curDate) {
    $(currentCityContainer).empty()
    var currentInfo = document.createElement("h2")
    var cityLi = document.createElement("li");
    var cityButton = document.createElement("button")
    
    cityButton.textContent = cityList
    cityButton.setAttribute("class", "button is-success my-cities");
    currentInfo.setAttribute("class", "has-text-weight-bold is-size-3")

    cityContainer.append(cityLi)
    cityLi.append(cityButton)
    
    currentCityContainer.append(currentInfo)

    currentInfo.append(cityList)
    currentInfo.append("   ")
    currentInfo.append(curDate)
    
    localStorage.setItem(cityButton, cityButton.textContent)
    
    
    
    
  

}
    
    

    
var currentData = function (currentInfo1, currentInfo2, currentInfo3, currentInfo4) {
    console.log(currentCityInfo1)
    
    var currentCityInfo1 = document.createElement("p")
    var currentCityInfo2 = document.createElement("p")
    var currentCityInfo3 = document.createElement("p")
    var currentCityInfo4 = document.createElement("p")

    

    currentCityInfo1.textContent = "Temperature :  " + currentInfo1 + "  F"
    currentCityInfo2.textContent = "Wind Speed :  " + currentInfo2 + "  MPH"
    currentCityInfo3.textContent = "Humidity :  " + currentInfo3 + "  %"
    currentCityInfo4.textContent = "UVI :  " + currentInfo4

    currentCityContainer.append(currentCityInfo1)
    currentCityContainer.append(currentCityInfo2)
    currentCityContainer.append(currentCityInfo3)
    currentCityContainer.append(currentCityInfo4)

    
}

var renderForcast = function (data) {
    $(fiveDayWeather).empty()
    for (let index = 0; index < 5; index++) {
        
        renderForcastCard (data[index]);
        
        
    }
}
    
    
var renderForcastCard = function (data) {
    console.log(data)
    

    var date = document.createElement("h3")
    var tempElement = document.createElement("p")
    var windElement = document.createElement("p")
    var humidityElement = document.createElement("p")
    var uviElement = document.createElement("p")
    var weatherIcon = document.createElement("img")
    var fiveDayDiv = document.createElement("div")


    fiveDayDiv.setAttribute("class","five-day has-background-link weather-style has-text-white")
    weatherIcon.setAttribute("src", "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png")
    
    date.textContent = moment.unix(data.dt).format("MM/DD/YYYY")
    tempElement.textContent = "Temp :  " + data.temp.day + "  F"
    windElement.textContent = "Wind Speed :  " + data.wind_speed + "  MPH"
    humidityElement.textContent = "Humidity :  " + data.humidity + "  %"
    uviElement.textContent = "uvi :  " + data.uvi
    
    fiveDayDiv.append(weatherIcon)
    fiveDayDiv.append(date)
    fiveDayDiv.append(tempElement)
    fiveDayDiv.append(windElement)
    fiveDayDiv.append(humidityElement)
    fiveDayDiv.append(uviElement)
    
  
    document.getElementById("five-day-container").append(fiveDayDiv)

}
            
            

    




    
    
    
    




// var fiveDayForcast = function (weather1, weather2, weather3, weather4) {
//     var weatherInfo1 = document.createElement("p")
//     var weatherInfo2 = document.createElement("p")
//     var weatherInfo3 = document.createElement("p")
//     var weatherInfo4 = document.createElement("p")

//     weatherInfo1.textContent = "Temp  :  " + weather1 + " F"
//     weatherInfo2.textContent = "Wind  :  " + weather2 + " MPH"
//     weatherInfo3.textContent = "Humidity  :  " + weather3 + " %"
//     weatherInfo4.textContent = "UVI  :  " + weather4

//     fiveDayWeather.append (weatherInfo1)
//     fiveDayWeather.append (weatherInfo2)
//     fiveDayWeather.append (+ weatherInfo3)
//     fiveDayWeather.append (weatherInfo4)
// }
    
