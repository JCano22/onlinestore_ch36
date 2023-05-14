import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page homeCont">
      <img
        src="http://www.voguetavern.com/wp-content/uploads/2022/01/VogueTavern_Full.png"
        alt="logo"
        width="250"
        height="250"
      />
      <h1>Welcome</h1>
      <p>Come down for the best beer and food around!</p>

      <Link to="/Catalog">
        <button className="btn btn-lg">Check our amazing menu!</button>
      </Link>
    </div>
  );
}
export default Home;
