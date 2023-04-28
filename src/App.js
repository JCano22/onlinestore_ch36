import './App.css';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import About from './pages/about';
import Home from './pages/home';
import Admin from './pages/admin';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import QuantityPicker from './components/quantityPicker';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>

      <div className='container-fluid'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/about' element={<About />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </div>

      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
