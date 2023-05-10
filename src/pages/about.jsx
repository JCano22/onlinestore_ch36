import "./about.css";
import MapContainer from "../components/mapContainer";

function About() {
  return (
    <div className="page about">
      <h3>Welcome to The Tavern!</h3>
      <div className="aboutContainer">
        <MapContainer />
      </div>
    </div>
  );
}
export default About;
