$(document).ready(function () {

    $("#searchBtn").on("click"),function() {
        var searchVal = $("#citySearch").val();
        // searchWeather(searchVal);
        $("#citySearch").empty();
       


        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchVal + "&appid=1111c693bffa0cd8263c73cbe8fe55be&units=imperial";
        $.ajax({
            type: "GET",
            url: queryURL,
            dataType: "json",
        }).then(function (response) {
            console.log(response)
            
            $("#location1").append(response.name)
            $("#temperature2").append(response.main.temp)
            $("#humidity3").append(response.main.humidity)
            $("#windSpeed4").append(response.wind.speed)
            
            getforcast(searchVal)

        })


        ajax({
            type: "GET",
            queryURL: "api.openweathermap.org/data/2.5/forecast?id" + searchVal + "&appid=1111c693bffa0cd8263c73cbe8fe55be&units=imperial",
            dataType: "json",
            success: function (data) {
                $("#fiveday display").html()
                for (var i = 0; i < data.list.length; i++) {
                    if (data.list[i].dt_txt.indexOf("21:00:00") !== -1) {
                        // create htm elements for a bootstrap card
                        var col = $("<div>").addClass("col-md-2");
                        var card = $("<div>").addClass("card bg.primary text-white")
                        var body = $("<div>").addClass("card-body p-2")
                        var title = $("<h5>").addClass("card-title").text(new Date(data.list[i].dt_txt).toLocaleDateString());
                        var p1 = $("<p>").addClass("card-text").text("Temp:" + data.list[i].main.temp_max + " F")
                        var p2 = $("<p>").addClass("card-text").text("Humidity: " + data.list[i].main.humidity + "%");

                        //merge together and put on page
                        col.append(card.append(body.append(title, p1, p2)));
                        $("#forecast .row").append(col);

                    }
                }

            }


        });

            ajax({
                type: "GET",
                queryURL: "https://api.openweathermap.org/data/2.5/uvi?" + searchVal + "&appid=1111c693bffa0cd8263c73cbe8fe55be",
                dataType: "json",
            }).then(function (response) {
                $("#uvIndex5").append()
            })


    };
});