$(document).ready(function(){
    $("button").click(function(){        
        $.ajax({
            type: "POST",
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + 
            $("input").val()+"&appid=8a143adbec3cfec85d09c51df5cc6ee5&units=metric",
            dataType:"json",
            success:function(data)
            {
               $(".searchRes").show();
               $(".searchCity").text("Current Weather in "+data.name+","+data.sys.country);
               $(".rain").text(capitalizeFirstLetter(data.weather[0].description));      
               $(".image").html('<img src="http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png"/>');
               $(".temp").text(data.main.temp+String.fromCharCode(176)+"C");
               $(".wind").text(data.wind.speed+"meter/sec");      
               $(".cloud").text(data.clouds.all+"%");      
               $(".pressure").text(data.main.pressure+"hPa");      
               $(".humid").text(data.main.humidity+"%");      
                 
            }
        });
    });
  });

  function capitalizeFirstLetter(inputString){
    inputString =inputString[0].toUpperCase()+inputString.slice(1) ;
    return inputString;
  }
  
