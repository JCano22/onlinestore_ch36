import MapComponent from "./mapComponent";
import "./mapContainer.css";

function MapContainer() {
  return (
    <div className="mapCont">
      <div className="aboutDescript">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu
          vehicula magna. Praesent est sapien, iaculis at mollis eget,
          pellentesque et sapien. Quisque id nisi mi. Aliquam erat volutpat.
          Maecenas nisl libero, tempus eu massa ac, facilisis volutpat nibh.
          Aenean eu vestibulum massa, eu sagittis ipsum. Vivamus iaculis dolor
          magna.
        </p>
      </div>
      <div className="map">
        <MapComponent />
      </div>
    </div>
  );
}
export default MapContainer;
