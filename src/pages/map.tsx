import React, { useEffect } from 'react';
import { Loader } from "@googlemaps/js-api-loader"

export default function Map() {
  let map;

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
      version: "weekly",
    });

    loader.load().then(async () => {
      const google = window.google;
      const mapElement = document.getElementById("map");
      
      if (mapElement) {
        map = new google.maps.Map(mapElement, {
          center: {
            lat: -34.397,
            lng: 150.644,
          },
          // scrollwheel: false,
          zoom: 8,
          disableDefaultUI: true,
        //   styles: [
        //     {
        //       featureType: "poi.business",
        //       stylers: [{ visibility: "off" }],
        //     },
        //     {
        //       featureType: "poi",
        //       elementType: "labels.icon",
        //       stylers: [{ visibility: "off" }],
        //     },
        // ]
      });
      }
    });
  }, []);

  return (
    <div id="map" style={{ width: '100%', height: '400px' }}></div>
  );
}
