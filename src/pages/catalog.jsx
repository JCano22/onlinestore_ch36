import "./catalog.css";
import Product from "../components/product";
import {useEffect, useState} from 'react';
import DataService from "../services/dataService";

const Catalog = () => {

    const [products, setProducts] = useState([]);

    useEffect(function (){
        console.log("catalog loaded");
        loadCatalog();
    },[]);

    function loadCatalog(){
        //get the product from the service
        let service = new DataService();
        let prods = service.getProducts();
        console.log(prods);
        setProducts(prods);
    }

        //when clicked, call a test function
        //with console.log message
    function magicTest(){
        console.log("hello form the button that we created");
        setProducts([]); //clear the array of products
    }
    
    return (
    <div className='page catalog'>
        <div>
            <h2>Check our amazing catalog!</h2>
            <h5>we have {products.length} Products for you!!</h5>

            <button onClick={magicTest} className="btn">Magic</button>
        </div>
        
        {products.map(p => <Product data={p}/>)}
        
        
    </div>
    )
}

export default Catalog;