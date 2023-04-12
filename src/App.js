import './App.css';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
// import QuantityPicker from './components/quantityPicker';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <NavBar/>

      <div className='container-fluid'>
        <Catalog />
      </div>

      <Footer />
    </div>
  );
}

export default App;
