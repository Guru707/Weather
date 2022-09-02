let loc = new Location;
let weather = new Weather;
console.log(weather);



let input = document.getElementById('city');
let btn = document.getElementById('search');
let row_hide = document.getElementById('hide-box');

row_hide.classList.add('d-none');
btn.addEventListener('click', function(){   

    let cityVal = input.value;
    if(input.value !== ''){
        row_hide.classList.remove('d-none');
        loc.getlocation(cityVal).then( function(data){
            const newdata = data.locationNew.data[0]
            let latitude = newdata.latitude;
            let longitude = newdata.longitude;
            weather.getweather(latitude,longitude).then(
                function(respon){
                    let output = respon.respons;
                    ui.showui(output);
                    ui.weathermain(output);
                    ui.wind(output)   ;                 
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


