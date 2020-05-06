$(document).ready(function () {

    $("#searchBtn").on("click", function () {

        var searchVal = $("#citySearch").val();
        localStorage.setItem("searchVal", searchVal);
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

                var output = response.list[1]
                $("#date1").html(output.dt_txt)
                $(".img").attr("src",output.weather[0].icon);
                $("#hum1").text(" Humidity "+ output.main.humidity);
                $("#temp1").text(" Temp " + output.main.temp);

                var output = response.list[9]
                $("#date2").html(output.dt_txt);
                $("#hum2").text(" Humidity "+ output.main.humidity);
                $("#temp2").text(" Temp " + output.main.temp);

                var output = response.list[17]
                $("#date3").html(output.dt_txt);
                $("#hum3").text(" Humidity "+ output.main.humidity);
                $("#temp3").text(" Temp "+ output.main.temp);

                var output = response.list[25]
                $("#date4").html(output.dt_txt);
                $("#hum4").text(" Humidity "+ output.main.humidity);
                $("#temp4").text(" Temp " + output.main.temp);

                var output = response.list[33]
                $("#date5").html(output.dt_txt);
                $("#hum5").text(" Humidity " + output.main.humidity);
                $("#temp5").text(" Temp "+ output.main.temp);



            })

        })

    });

});
