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
        console.log(oldLocation.getName() + " => " + newLocation.getName());
      }
    }
  }

  function searchLocationByName(oldLocation : Location, name : string){
    for(let i = 0; i < locations.length; i++){
      if(locations[i].getName() == name){
        oldLocation = locations[i];
      }
    }
  }

  return (
    //contol bar
    <div id="contol bar" className="w-full fixed top-0 left-0" style={{backgroundColor: 'rgb(162, 103, 255)', height:'5vh'}}>
      <div id="logo and title" className="flex items-left">
        <img src='./assets/gator_logo.png' style={{position: 'relative', left: '3.2vh', top: '0', width: '5vh', height: '5vh'}}  alt="gatorlogo"/>
        <div id ="title" style={{position: 'relative', left: '4vh', top: '0', fontSize:'3vh'}}>SF_Maps</div>
    </div> {/* END */}
    {/* home functions */}
    <div id="home functions" className="w-full h-screen bg-violet-900 ">
      {/* map space */}
      <div id="map"
      style={{borderRadius: '5vh', outlineStyle: 'solid', outlineWidth: '0.5vh', outlineColor: 'rgb(139 92 246)', position:'fixed', top:'7.5vh', left: '3vh',backgroundColor: 'white', width: '102vh', height: '90vh'}}>
      </div>
      {/* origin buttons */}
      <div id="set_origin" className=""
      style={{fontSize: '2.5vh', position:'fixed', top:'7.5vh', right: '3vh', width: '68.31vh', height: '34.5vh'}}>
          <p style={{marginBottom: '2.07vh'}}>Input your origin. Where are you now?</p>
          <div style={{borderRadius: '5vh', outlineStyle: 'solid', outlineWidth: '0.5vh', outlineColor: 'rgb(139 92 246)',backgroundColor: 'rgb(232, 218, 255)'}}>
          <input id='search origin' style={{width: '64.17vh', borderStyle: 'solid', borderColor: 'black', borderWidth: '0.15vh', color: 'black', marginLeft:'2.07vh', marginTop: '2.07vh', marginBottom: '2.07vh', borderRadius: '5vh'}}></input>
          <div id='buttons' style={{width:'fill', color: 'black'}}>
            <button id='mary_ward' onClick={() => searchLocation(origin, maryWard)} style={{margin: '0.2vh', color: 'black',}}>
              <img src='./assets/residential.png' style={{width: '20.01vh', height: '20.01vh', marginLeft:'2.07vh'}}></img>
              Mary Ward
            </button>
            <button id='city_eats' onClick={() => searchLocation(origin, cityEats)} style={{margin: '0.2vh', color: 'black',}}>
            <img src='./assets/dining.png' style={{width: '20.01vh', height: '20.01vh', marginLeft:'2.07vh'}}></img>
              City Eats
            </button>
            <button id='mashouf' onClick={() => searchLocation(origin, cityEats)} style={{margin: '0.2vh', color: 'black',}}>
            <img src='./assets/gym.png' style={{width: '20.01vh', height: '20.01vh', marginLeft:'2.07vh'}}></img>
              Mashouf
            </button>
          </div>
        </div>
      </div>
      {/* destination buttons */}
      <div id="set_destin" className=""
      style={{position:'fixed', top:'48vh', right: '3vh', width: '68.31vh', height: '34.5vh'}}>
          <p style={{fontSize: '2.5vh', marginBottom: '2.25vh'}}>Input your destination. Where are you going?</p>
          <div style={{borderRadius: '5vh', outlineStyle: 'solid', outlineWidth: '0.5vh', outlineColor: 'rgb(139 92 246)',backgroundColor: 'rgb(232, 218, 255)'}}>
          <input id='search origin' style={{width: '64.17vh', borderStyle: 'solid', borderColor: 'black', borderWidth: '0.15vh', color: 'black', marginLeft:'2.25vh', marginTop: '2.25vh', marginBottom: '3vh', borderRadius: '5vh'}}></input>
          <div id='buttons' style={{width:'fill', color: 'black'}}>
            <button id='mary_ward' onClick={() => searchLocation(destination, maryWard)} style={{margin: '0.2vh', color: 'black',}}>
              <img src='./assets/residential.png' style={{width: '20.01vh', height: '20.01vh', marginLeft:'2.07vh'}}></img>
              Mary Ward
            </button>
            <button id='city_eats' onClick={() => searchLocation(destination, cityEats)} style={{margin: '0.2vh', color: 'black',}}>
            <img src='./assets/dining.png' style={{width: '20.01vh', height: '20.01vh', marginLeft:'2.07vh'}}></img>
              City Eats
            </button>
            <button id='mashouf' onClick={() => searchLocation(destination, cityEats)} style={{margin: '0.2vh', color: 'black',}}>
            <img src='./assets/gym.png' style={{width: '20.01vh', height: '20.01vh', marginLeft:'2.07vh'}}></img>
              Mashouf
            </button>
          </div>
        </div>
      </div>
      {/*Build Route button*/}
      <button id='build-route button'
      style={{position: 'fixed', right: '3vh', top: '91.07vh', textAlign: 'center', borderRadius: '5vh', width: '68.31vh', height: '5vh', backgroundColor: 'lightblue'}}>
        build route
      </button>
    </div> {/* END home functions*/}
  </div>
)
}
