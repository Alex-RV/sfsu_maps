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
          zoom: 17,
          mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        mapTypeIds: ["roadmap", "terrain"],
      },
      
        });
      }
    });
  }, []);

  return (
    <div id="map" style={{ width: '100%', height: '600px' }}>
      
    </div>
  );
}
