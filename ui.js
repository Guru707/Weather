class UI{
    constructor(){
        this.weather_bg = document.getElementById('wheater-bg');
        this.humidity = document.getElementById('w-humidity');
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
       
    }
    
    showui(output){            
        this.humidity.textContent = `Humidity: ${output.main.humidity}`;            
        this.temp.textContent = `Temprature: ${output.main.temp}`;            
        this.min_temp.textContent = `Temprature Min: ${output.main.temp_min}`;            
        this.max_temp.textContent = `Temprature Max: ${output.main.temp_max}`;    
        this.location.textContent = output.name;       
         
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
}

 
 const ui = new UI();