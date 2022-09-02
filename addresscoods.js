class Location{
    constructor(){
        this.locationKey = '5a2efcfaaf709f5bc887f38f7dac670e';
        // this.address = "1600 Pennsylvania Ave NW, Washington DC";
    }

    async getlocation(cityVal){
            const location = await fetch(`http://api.positionstack.com/v1/forward?access_key=${this.locationKey}&query=${cityVal}`)
    
            const locationNew = await location.json();

                // console.log(locationNew);
            return{
                locationNew
            }

        }
   
}
