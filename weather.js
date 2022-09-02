class Weather{
    constructor(){
        this.apikey = 'c0979110d4fb971dee00e161606399e3';
        this.part = 'hourly,daily';
    }

   async getweather(lat,long){
        //  const weatherApi = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude=${this.part}&appid=${this.apikey}`);

         const weatherApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${this.apikey}`);

         const respons = await weatherApi.json();

         console.log(respons);
         return{
            respons
         }
    }
}