class UI{
    constructor(){
        this.weather_bg = document.getElementById('wheater-bg');
        this.humidity = document.getElementById('w-humidity');
        this.city = document.getElementById('city');
        this.weather = document.getElementById('w-weather');
        this.temp = document.getElementById('w-temp');
        this.min_temp = document.getElementById('w-min_temp');
        this.max_temp = document.getElementById('w-max_temp');
        this.location = document.getElementById('w-location');
        this.description  = document.getElementById('w-desc');
        this.icon  = document.getElementById('w-icon');
        this.speed  = document.getElementById('w-speed');
        this.deg  = document.getElementById('w-deg');
        this.guet  = document.getElementById('w-gues');
        this.newdate  = document.getElementById('w-time');
       
    }
   
    showui(output){            
        this.humidity.textContent = `Humidity: ${output.main.humidity}`;            
        this.temp.textContent = `Temprature: ${output.main.temp}`;            
        this.min_temp.textContent = `Temprature Min: ${output.main.temp_min}`;            
        this.max_temp.textContent = `Temprature Max: ${output.main.temp_max}`;    
        this.location.textContent = output.name;       
        this.city.value = output.name;
         
    }
    weathermain(output){
         let x = '';
         let desc = '';
         let icon = '';
        output.weather.forEach((weather) => 
            { 
                x += weather.main;
                desc = weather.description;
                icon = weather.icon;
                // weather_type = weather.main;
                
                return x
            });
            this.weather.textContent = `Weather Type: ${x}`;
            this.description.textContent = desc;
            this.icon.setAttribute('src',`https://openweathermap.org/img/wn/${icon}@2x.png` );
            
            if(x == "Clouds"){
                this.weather_bg.setAttribute('style',`background:url(images/light-cloud.jpg)`);
            }
            else if(x == "Clear"){
                this.weather_bg.setAttribute('style',`background:url(images/clear.jpg)`);
            }
            else if(x == "Rain"){
                this.weather_bg.setAttribute('style',`background:url(images/heavy-rain.jpg)`);
            }  
                  
    }

    wind(output){
        console.log('wind', output);
        this.speed.textContent = `Wind Speed: ${output.wind.speed}`;
        this.deg.textContent =   `Angel: ${output.wind.deg}`;
        this.guet.textContent = `Gust: ${output.wind.gust}`;

    }
    date_time(sys){
        let timestamp = sys.timezone;
        let date = Date(timestamp).toLocaleString();
          let newDate = new Date(date).toString();
        let year =  new Date(newDate);
        console.log(year);
         let currentdate;     
        if(year.getDate() < 10){
            currentdate = `0${year.getDate()}`
        }else{
            currentdate = `${year.getDate()}`
        }
        // for night images
        // if(year.getHours() > 18 && year.getHours() > 6  ){
        //     this.weather_bg.setAttribute('style',`background:url(images/night.jpg)`);
        // }
        // else{
        //     this.weather_bg.setAttribute('style',`background:url(images/light-cloud.jpg)`);
        // }
        // console.log(year.getHours() > 18);
              
        this.newdate.textContent = `Date: ${currentdate}-${year.getMonth()+1}-${year.getFullYear()} ${year.getHours()}:${year.getMinutes()}:${year.getSeconds()}`
    }
   
}

 
 const ui = new UI();