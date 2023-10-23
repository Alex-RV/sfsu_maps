import React, { useEffect } from 'react';
import { Loader } from "@googlemaps/js-api-loader";
import markersData from '../../config/markers.json'; 

export default function Map() {
  let map: google.maps.Map | undefined;
  const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;
  const MAP_ID_GOOGLE_MAPS = process.env.NEXT_PUBLIC_MAP_ID_GOOGLE_MAPS as string;

  useEffect(() => {
    const loader = new Loader({
      apiKey: GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });

    loader.load().then(async () => {
      const google = window.google;
      const mapElement = document.getElementById("map");

      if (mapElement) {
        map = new google.maps.Map(mapElement, {
          center: {
            lat: 37.722169, 
            lng: -122.478443,
          },
          zoom: 16,
          mapTypeControl: false,
          mapId: MAP_ID_GOOGLE_MAPS,
        });

        // Iterate through the markersData and create markers
        markersData.forEach(marker => {
          new google.maps.Marker({
            position: { lat: marker.lat, lng: marker.lng },
            map,
            title: marker.name,
          });
        });

        // Define the route
        const directionsService = new google.maps.DirectionsService();
        const directionsRenderer = new google.maps.DirectionsRenderer({
          map, // Use the map variable defined above
        });

        const request = {
          origin: new google.maps.LatLng(37.72190204203244, -122.47684565585695),
          destination: new google.maps.LatLng(37.72302760931965, -122.48173155228987),
          travelMode: google.maps.TravelMode.WALKING,
        };

        directionsService.route(request, (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);
          } else {
            console.error('Directions request failed with status:', status);
          }
        });
      }
    });
  }, []);

  return (
    <div id="map" style={{ width: '100%', height: '600px' }}>
      
    </div>
  );
}
