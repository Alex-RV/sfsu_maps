//import React from 'react'
import React, { useState, useEffect } from 'react';
import { Loader } from "@googlemaps/js-api-loader";
import markersData from '../../config/markers.json';

export default function home() {
  
  const [map, setMap] = useState<google.maps.Map | undefined>(undefined);
  const [originLat, setOriginLat] = useState(37.72190204203244);
  const [originLng, setOriginLng] = useState(-122.47684565585695);
  const [destinationLat, setDestinationLat] = useState(37.72302760931965);
  const [destinationLng, setDestinationLng] = useState(-122.48173155228987);

  const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;
  const MAP_ID_GOOGLE_MAPS = process.env.NEXT_PUBLIC_MAP_ID_GOOGLE_MAPS as string;
  const directionsRendererRef = React.useRef<google.maps.DirectionsRenderer | null>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });

    loader.load().then(async () => {
      const google = window.google;
      const mapElement = document.getElementById("map");

      if (mapElement) {
        const newMap = new google.maps.Map(mapElement, {
          center: {
            lat: 37.722169,
            lng: -122.478443,
          },
          zoom: 17,
          mapTypeControl: false,
          mapId: MAP_ID_GOOGLE_MAPS,
        });

        setMap(newMap);
        directionsRendererRef.current = new google.maps.DirectionsRenderer({
          map: newMap,
        });

        // Add markers from markersData
        markersData.forEach(marker => {
          // Create a custom icon for each marker based on the icon name
          const customIcon = {
            url: marker.icon, // Assuming that icon contains the URL to the custom icon
            scaledSize: new google.maps.Size(32, 32), // Adjust size as needed
          };

          const markerObj = new google.maps.Marker({
            position: { lat: marker.lat, lng: marker.lng },
            map: newMap,
            title: marker.name,
            icon: customIcon,
          });

          // Create an InfoWindow for each marker
          const infoWindow = new google.maps.InfoWindow({
            content: `<div><h3>${marker.name}</h3><p>${marker.description}</p><img src="${marker.image}" alt="Marker Image" width="100px"></div>`
          });

          // Attach a click event to open the InfoWindow when the marker is clicked
          markerObj.addListener("click", () => {
            infoWindow.open(newMap, markerObj);
          });
        });
      }
    });
  }, []);

  const buildRoute = () => {
    if (!map || !directionsRendererRef.current) {
      return;
    }

    // Clear previous route
    directionsRendererRef.current?.setDirections({ routes: [] });

    const directionsService = new google.maps.DirectionsService();
    const request = {
      origin: new google.maps.LatLng(originLat, originLng),
      destination: new google.maps.LatLng(destinationLat, destinationLng),
      travelMode: google.maps.TravelMode.WALKING,
    };

    directionsService.route(request, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsRendererRef.current?.setDirections(result);
      } else {
        console.error('Directions request failed with status:', status);
      }
    });
  };

  return (
    <div id="contol bar" className="w-full bg-violet-500 fixed top-0 left-0" style={{height:'5vh'}}>
      <div id="logo and title" className="flex items-left">
        <img style={{ backgroundImage: `url('./public/assets/gator_logo.png')`, position: 'relative', left: '3.2vh', top: '0', width: '5vh', height: '5vh'}}/>
        <div id ="title" style={{position: 'relative', left: '4vh', top: '0', fontSize:'3vh'}}>SF_Maps</div>
      </div>
      <div id="home functions" className="w-full h-screen bg-violet-900 ">
        <div id="map"
        style={{borderRadius: '5vh', outlineStyle: 'solid', outlineWidth: '0.5vh', outlineColor: 'rgb(139 92 246)', position:'fixed', top:'7.5vh', left: '3vh',backgroundColor: 'white', width: '102vh', height: '90vh'}}>
        </div>
        <div id="set_origin" className=""
        style={{borderRadius: '5vh', outlineStyle: 'solid', outlineWidth: '0.5vh', outlineColor: 'rgb(139 92 246)',  position:'fixed', top:'7.5vh', right: '3vh',backgroundColor: 'white', width: '99vh', height: '50vh'}}>
        </div>
        <div id="set_destin" className="">
        </div>
      </div>
    </div>
  )
}
