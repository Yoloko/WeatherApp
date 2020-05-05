$(document).ready(function () {

    $("#searchBtn").on("click", function () {
        var searchVal = $("#citySearch").val();
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchVal + "&appid=1111c693bffa0cd8263c73cbe8fe55be&units=imperial";

        $.ajax({
            type: "GET",
            url: queryURL,
            dataType: "json",
        }).then(function (response) {
            console.log(response)

            $("#location1").html(response.name)
            $("#temperature2").html(response.main.temp)
            $("#humidity3").html(response.main.humidity)
            $("#windSpeed4").html(response.wind.speed)

            var fiveDayurl = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchVal + "&appid=1111c693bffa0cd8263c73cbe8fe55be&units=imperial";
            $.ajax({
                url: fiveDayurl,
                type: "GET",
                dataType: "json",
            }).then(function (response) {
                console.log(response)
                var output = response.list[0]
                $("#date1").html(output.dt_txt)
                $("#hum1").html(output.main.humidity);
                $("#temp1").html(output.main.temp);

                var output = response.list[1]
                $("#date2").html(output.dt_txt);
                $("#hum2").html(output.main.humidity);
                $("#temp2").html(output.main.temp);

                var output = response.list[16]
                $("#date3").html(output.dt_txt);
                $("#hum3").html(output.main.humidity);
                $("#temp3").html(output.main.temp);

                var output = response.list[17]
                $("#date4").html(output.dt_txt)

            })

        })

    });

});
