
var cityContainer = document.querySelector("#city-list");
var currentCityContainer = document.querySelector('#current-city-info')


$("#search-city").click(function (event) {
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

            appendCity(currentCity)

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


        });

}

var appendCity = function (cityList) {
    var currentInfo = document.createElement("h2")
    var cityLi = document.createElement("li");
    var cityButton = document.createElement("button")
    var currentDateAndTime = (moment().format("MMMM D, YYYY"))
    
    

    cityButton.textContent = cityList
    cityButton.setAttribute("class", "button is-success my-cities");
    currentInfo.setAttribute("class", "has-text-weight-bold is-size-3")

    cityContainer.append(cityLi)
    cityLi.append(cityButton)
    currentCityContainer.append(currentInfo)
    currentInfo.append(cityList +"  "+ currentDateAndTime)
    
}

var currentData = function (currentInfo1, currentInfo2, currentInfo3, currentInfo4) {

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