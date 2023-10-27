import React from 'react'

export default function home() {


  class Location {
    name : string;
    longitude: number;
    langitude: number;
    //constructor
    constructor(name : string, long : number, lang : number){
      this.name = name;
      this.longitude = long;
      this.langitude = lang;
    }
    //getters and setters
    getName(){return this.name;}
    getLongitude(){return this.longitude;}
    getLangitude(){return this.langitude;}
    setCoordinate(long : number, lang : number){
      this.longitude = long;
      this.langitude = lang;
    }
  }

  let origin = new Location('origin', 0, 0);
  let destination = new Location('destination', 0, 0);

  let maryWard = new Location('mary ward', 12, 12);
  let cityEats = new Location('city eats', 16, 16);
  let mashouf = new Location('mashouf', 30, 30);

  let locations : Array<Location> = [maryWard, cityEats, mashouf];

  function searchLocation (oldLocation: Location, newLocation : Location) {
    for(let i = 0; i < locations.length; i++){
      let currLoc = locations[i].getName();
      if(currLoc == newLocation.getName()){
        oldLocation = newLocation;
        console.log("Destination Changed");
      }
    }
  }

  return (
    <div id="contol bar" className="w-full bg-violet-500 fixed top-0 left-0" style={{height:'5vh'}}>
      <div id="logo and title" className="flex items-left">
        <img style={{ /*backgroundImage: `url('./public/assets/gator_logo.png')`,*/ position: 'relative', left: '3.2vh', top: '0', width: '5vh', height: '5vh'}}  alt="gatorlogo"/>
        <div id ="title" style={{position: 'relative', left: '4vh', top: '0', fontSize:'3vh'}}>SF_Maps</div>
      </div>
      <div id="home functions" className="w-full h-screen bg-violet-900 ">
        <div id="map"
        style={{borderRadius: '5vh', outlineStyle: 'solid', outlineWidth: '0.5vh', outlineColor: 'rgb(139 92 246)', position:'fixed', top:'7.5vh', left: '3vh',backgroundColor: 'white', width: '102vh', height: '90vh'}}>
        </div>
        <div id="set_origin" className=""
        style={{borderRadius: '5vh', outlineStyle: 'solid', outlineWidth: '0.5vh', outlineColor: 'rgb(139 92 246)',  position:'fixed', top:'7.5vh', right: '3vh',backgroundColor: 'white', width: '99vh', height: '50vh'}}>
          <button id='mary_ward' onClick={() => searchLocation(origin, maryWard)} style={{margin: '0.2vh', color: 'black',}}>Mary Ward</button>
          <button id='city_eats' onClick={() => searchLocation(origin, cityEats)} style={{margin: '0.2vh', color: 'black',}}>City Eats</button>
        </div>
        <div id="set_destin" className="">
        </div>
      </div>
    </div>
  )
}
