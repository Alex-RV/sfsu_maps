import React, { useState } from 'react';
import locationsData from '../../config/locations.json';
import Image from 'next/image';

export default function Home() {
  const [origin, setOrigin] = useState<Location | null>(null);
  const [destination, setDestination] = useState<Location | null>(null);
  const [searchResultsOrigin, setSearchResultsOrigin] = useState<Location[]>(locationsData);
  const [searchResultsDestination, setSearchResultsDestination] = useState<Location[]>(locationsData);

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
    <div id="control-bar" className="w-full fixed top-0 left-0 bg-purple-600 h-16 flex items-center">
      <img src="./assets/gator_logo.png" className="w-16 h-16 ml-4" alt="gatorlogo" />
      <div id="title" className="text-3xl ml-4">SF_Maps</div>
    </div>

    <div id="home-functions" className="w-full h-screen bg-violet-900" style={{ backgroundImage: `url('./assets/background.png')` }}>
      {/* <img src="./assets/background.png" className="w-full h-full opacity-50" alt="background" /> */}

      <div id="map" className="rounded-3xl border-2 border-purple-500 fixed top-20 left-4 bg-white w-96 h-4/5"></div>

      <div id="set-origin" className="fixed top-20 right-4 w-96 h-96">
        <p className="text-xl mb-4">Input your origin. Where are you now?</p>
        <div className="rounded-3xl border-2 border-purple-500 bg-purple-200 p-4">
          <input
            id="search-origin"
            className="w-full border border-black p-2 mb-4 rounded-3xl"
            placeholder="Search origin"
            onChange={searchLocationsOrigin}
          />
          <div className="flex flex-row">
          {searchResultsOrigin.map((location: Location) => (
            <button key={location.image} id={location.image} onClick={() => selectLocation(location, false)} className="flex items-center p-2 m-2 flex-col">
              <Image width={300} height={300} src={`/assets/${location.image}`} alt={location.name} className="w-20 h-20 mr-2" />
              {location.name}
            </button>
            ))}
          </div>
        </div>
      </div>

      <div id="set-destination" className="fixed top-96 right-4 w-96 h-96">
        <p className="text-xl mb-4">Input your destination. Where are you going?</p>
        <div className="rounded-3xl border-2 border-purple-500 bg-purple-200 p-4">
        <input
            id="search-dest"
            className="w-full border border-black p-2 mb-4 rounded-3xl"
            placeholder="Search origin"
            onChange={searchLocationsDestination}
          />
          <div className="flex flex-row">
          {searchResultsDestination.map((location: Location) => (
            <button key={location.image} id={location.image} onClick={() => selectLocation(location, false)} className="flex items-center p-2 m-2 flex-col">
              <Image width={300} height={300} src={`/assets/${location.image}`} alt={location.name} className="w-20 h-20 mr-2" />
              {location.name}
            </button>
            ))}
          </div>
        </div>
      </div>

      <button
        id="build-route-button"
        className="bg-blue-400 text-black border border-black border-2 rounded-3xl p-2 absolute bottom-4 right-4 w-96"
      >
        Build Route
      </button>
    </div>
    </div>
  );
}