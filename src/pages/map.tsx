import React, { useEffect } from 'react';
import { Loader } from "@googlemaps/js-api-loader"

export default function Map() {
  let map;
  const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

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
          zoom: 16, // Adjust the zoom level.
          mapTypeControl: false, // Remove the map type control.
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }], // Hide labels for points of interest.
            },
            {
              featureType: "poi",
              elementType: "geometry",
              stylers: [{ visibility: "off" }], // Hide points of interest.
            },
            {
              featureType: "road",
              elementType: "labels",
              stylers: [{ visibility: "on" }], // Show road labels.
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [
                { visibility: "on" }, // Show roads.
                { color: "#dcdcdc" }, // Lighten road color.
              ],
            },
            {
              featureType: "landscape",
              elementType: "geometry",
              stylers: [
                { visibility: "on" },
                { color: "#f2f2f2" },
              ],
            },
            {
              featureType: "landscape.man_made",
              elementType: "geometry",
              stylers: [
                { visibility: "on" }, // Show human-made landscape.
              ],
            },
          ],
        });

        // Add markers for the start and end points
        const startMarker = new google.maps.Marker({
          position: {
            lat: 37.72190204203244,
            lng: -122.47684565585695,
          },
          map: map,
          title: 'Start Point',
        });

        const endMarker = new google.maps.Marker({
          position: {
            lat: 37.72302760931965,
            lng: -122.48173155228987,
          },
          map: map,
          title: 'End Point',
        });

        // Define the route
        const directionsService = new google.maps.DirectionsService();
        const directionsRenderer = new google.maps.DirectionsRenderer({
          map: map,
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
