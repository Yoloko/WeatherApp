$(document).ready(function () {

    $("#searchBtn").on("click",function() {
        var searchVal = $("#citySearch").val();
          
       
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
            
        
            
          var fiveDay ="https://api.openweathermap.org/data/2.5/forecast?q=" + searchVal  +  "&appid=1111c693bffa0cd8263c73cbe8fe55be&units=imperial";
           
             $.ajax({
             url: fiveDay,
             type: "GET",
             dataType: "json",
             }).then(function (response) {
             console.log(response)
             console.log(response.list[0].dt_txt)
             $("#Temp1").append(response.list[0].main.temp);
             $(".hum").append(time)

        
              
            


       
             })
            
        })
  
    });

});
