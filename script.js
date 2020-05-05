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
                var len = response.list.length
                for (let i=0; i<5; i++) {
                    setTimeout(() => {
                        var output = response.list[i]
                        
                        // var li = document.createElement("li");
                        // var text = document.createTextNode(output.dt_txt);
                        // li.appendChild(text);
                        // document.getElementById("Temp1").appendChild(li);

                        $("#Temp1").html(output.dt_txt);
                        $("#hum").html(output.main.humidity);
                    }, i*1000);
                }
            })

        })

    });

});
