
var cityContainer = document.querySelector("#city-list");

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
           citySearch (lati, longi)

        });


}

var citySearch = function (coord1, coord2) {

   var reuquestUrlFinal = "https://api.openweathermap.org/data/2.5/onecall?lat=" + coord1 + "&lon=" + coord2 + "&appid=ebf599dc48a9abbd47ad19f67bdf029f"
// console.log (reuquestUrlFinal)

fetch(reuquestUrlFinal, {
})
    .then(function (response) {
        console.log(response)
        return response.json();


    })

    .then(function (data) {
       

    });


appendCity ()

}

var appendCity = function () {


}