import React, { useState, useEffect } from 'react';
import { Loader } from "@googlemaps/js-api-loader";
import markersData from '../../config/markers.json';

export default function Map() {
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
    // console.log(originLat, originLng, destinationLat, destinationLng)
    const request = {
      origin: new google.maps.LatLng(originLat, originLng),
      destination: new google.maps.LatLng(destinationLat, destinationLng),
      travelMode: google.maps.TravelMode.WALKING,
    };
    console.log(request)

    directionsService.route(request, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsRendererRef.current?.setDirections(result);
        console.log(result)
      } else {
        console.error('Directions request failed with status:', status);
      }
    });
  };

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '600px' }}></div>
      <div>
        <label>Origin Latitude:</label>
        <input
          type="number"
          value={originLat}
          onChange={(e) => setOriginLat(Number(e.target.value))}
        />
        <label>Origin Longitude:</label>
        <input
          type="number"
          value={originLng}
          onChange={(e) => setOriginLng(Number(e.target.value))}
        />
        <label>Destination Latitude:</label>
        <input
          type="number"
          value={destinationLat}
          onChange={(e) => setDestinationLat(Number(e.target.value))}
        />
        <label>Destination Longitude:</label>
        <input
          type="number"
          value={destinationLng}
          onChange={(e) => setDestinationLng(Number(e.target.value))}
        />
        <button onClick={buildRoute}>Build Route</button>
      </div>
    </div>
  );
}
