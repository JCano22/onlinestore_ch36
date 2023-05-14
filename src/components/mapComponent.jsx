import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const KEY_MAPS = "AIzaSyCu2GqpMxeX11sSHUS_qvLQWbGlEcCWiAM";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 32.64506854855944,
  lng: -117.08086896727349,
};

function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: KEY_MAPS,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={9}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MapComponent);
