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
    <div className='h-full'>
     <div id="control-bar" className="w-full flex flex-row bg-[#A267FF] h-16  items-center">
       <img src="./assets/gator_logo.png" className="w-16 h-16 ml-4" alt="gatorlogo" />
       <div id="title" className="text-3xl ml-4 text-white">SF_Maps</div>
    </div>

    <div id="home-functions" className="w-full h-auto bg-violet-900 flex lg:flex-row md:flex-row flex-col-reverse justify-between" style={{ backgroundImage: `url('./assets/background.png')`}}>
      {/* <img src="./assets/background.png" className="w-full h-full opacity-50" alt="background" /> */}

      <div className="rounded-3xl border-2 border-purple-500 mt-10 ml-10 w-2/3 bg-white overflow-x-scroll grid">
        <Map 
          originLat={origin?.latitude || 0}
          originLng={origin?.longitude || 0}
          destinationLat={destination?.latitude || 0}
          destinationLng={destination?.longitude || 0}
          buildRouteTrigger={buildRouteTrigger}
          setBuildRouteTrigger={setBuildRouteTrigger}
         />
      
      </div>
      
      <div className='flex flex-col mt-5 mr-5 w-1/3 ml-5'>
        <div id="set-origin" className=" flex flex-col my-7">
          <p className="text-xl mb-4 text-white">Input your origin. Where are you now?</p>
          <div className="rounded-3xl border-2 border-purple-500 bg-[#E8DAFF] p-4">
            <input
              id="search-origin"
              className="w-full border border-black p-2 mb-4 rounded-3xl text-black"
              placeholder="Search origin"
              onChange={searchLocationsOrigin}
            />
            <div className="flex flex-row overflow-x-scroll ">
            {searchResultsOrigin.map((location: Location) => (
              <button key={location.name} id={location.image} onClick={() => selectLocation(location, true)} className="flex w-32 items-center p-2 m-2 flex-col flex-shrink-0">
                <Image width={500} height={500} src={`/assets/${location.image}`} alt={location.name} className="w-20 h-20 mr-2" />
                <h1 className='text-black'> {location.name} </h1>
              </button>
              ))}
            </div>
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
