import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const techPark = { lat: 30.4546555, lng: -91.1141336 };

const EventMap = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: techPark.lat, lng: -91.1341336 }}
      options={{ disableDefaultUI: true }}
    >
      <Marker position={techPark} />
    </GoogleMap>
  ))
);

export default EventMap;
