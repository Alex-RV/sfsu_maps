import React, { useState } from 'react';
import locationsData from '../../config/locations.json';
import Image from 'next/image';
import Map from '../../components/Map';

export default function Home() {
  const [origin, setOrigin] = useState<Location | null>(null);
  const [destination, setDestination] = useState<Location | null>(null);
  const [searchResultsOrigin, setSearchResultsOrigin] = useState<Location[]>(locationsData);
  const [searchResultsDestination, setSearchResultsDestination] = useState<Location[]>(locationsData);
  const [buildRouteTrigger, setBuildRouteTrigger] = useState(false);

  interface Location {
    name: string;
    longitude: number;
    latitude: number;
    image: string;
  }

 
  const searchLocationsOrigin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const results = locationsData.filter((location) =>
      location.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSearchResultsOrigin(results);
  };
  

  const searchLocationsDestination = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const results = locationsData.filter((location) =>
      location.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    console.log(results)
    setSearchResultsDestination(results);
  };

  // Function to set the origin or destination based on the selected location
  const selectLocation = (location: Location, isOrigin: boolean) => {
    if (isOrigin) {
      setOrigin(location);
    } else {
      setDestination(location);
    }
  };
  
  return (
    <div>
    <div id="control-bar" className="w-full flex flex-row bg-[#A267FF] h-16  items-center">
      <img src="./assets/gator_logo.png" className="w-16 h-16 ml-4" alt="gatorlogo" />
      <div id="title" className="text-3xl ml-4 text-white">SF_Maps</div>
    </div>

    <div id="home-functions" className="w-full h-full bg-violet-900 flex lg:flex-row md:flex-row flex-col-reverse justify-between" style={{ backgroundImage: `url('./assets/background.png')` }}>
      {/* <img src="./assets/background.png" className="w-full h-full opacity-50" alt="background" /> */}

      <div className="rounded-3xl border-2 border-purple-500 mt-10 ml-10 w-2/3 bg-white">
      <Map
        originLat={origin?.latitude || 0}
        originLng={origin?.longitude || 0}
        destinationLat={destination?.latitude || 0}
        destinationLng={destination?.longitude || 0}
        buildRouteTrigger={buildRouteTrigger}
        setBuildRouteTrigger={setBuildRouteTrigger}
      />

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

        <div id="set-destination" className=" flex flex-col my-7">
          <p className="text-xl mb-4 text-white">Input your destination. Where are you going?</p>
          <div className="rounded-3xl border-2 border-purple-500 bg-[#E8DAFF] p-4">
          <input
              id="search-dest"
              className="w-full border border-black p-2 mb-4 rounded-3xl"
              placeholder="Search destination"
              onChange={searchLocationsDestination}
            />
            <div className="flex flex-row overflow-x-auto ">
            {searchResultsDestination.map((location: Location) => (
              <button key={location.name} id={location.image} onClick={() => selectLocation(location, false)} className="flex w-32 items-center p-2 m-2 flex-col flex-shrink-0">
                <Image width={500} height={500} src={`/assets/${location.image}`} alt={location.name} className="w-20 h-20 mr-2" />
                <h1 className='text-black'>{location.name}</h1>
              </button>
              ))}
            </div>
          </div>
        </div>
        <div className='items-center justify-center flex'>
        <button
          id="build-route-button"
          className="bg-blue-400 text-black  border-black border-2 rounded-3xl p-2  w-96"
          onClick={() => setBuildRouteTrigger(true)}
        >
          Build Route
        </button>
    </div>
    </div>
    </div>
    </div>
  );
}