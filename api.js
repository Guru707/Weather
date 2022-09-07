let loc = new Location;
let weather = new Weather;
console.log(weather);



let input = document.getElementById('city');
let btn = document.getElementById('search');
let row_hide = document.getElementById('hide-box');
//   when user enter in the page 
document.addEventListener('DOMContentLoaded',userCurrentLocation)
function userCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      console.log(`Geo location not support browser`)
    }
  }
  
//   User current location 
  function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    weather.getweather(latitude,longitude).then(
        function(respon){
            let output = respon.respons;
            ui.showui(output);
            ui.weathermain(output);
            ui.wind(output);   
            ui.date_time(output);              
        }
    )
  }
btn.addEventListener('click', function(){  
    let cityVal = input.value;
    if(input.value !== ''){
  
        loc.getlocation(cityVal).then( function(data){
            const newdata = data.locationNew.data[0]
            let latitude = newdata.latitude;
            let longitude = newdata.longitude;
            weather.getweather(latitude,longitude).then(
                function(respon){
                    let output = respon.respons;
                    ui.showui(output);
                    ui.weathermain(output);
                    ui.wind(output); 
                    ui.date_time(output);                
                }
            )
        }
        ).catch(function(err){
            err = 'Please Enter valid Address'
            alert(err);
            input.value = '';
        })
      
    }else{
        console.log("Invalid value")
        
    }
    
})


