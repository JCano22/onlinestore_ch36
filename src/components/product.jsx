import "./product.css";
import QuantityPicker from "./quantityPicker";
import {useEffect} from 'react';




function Product(props){
    useEffect(function (){
        //when the component loads
        console.log("hello, i'm a product");
        
    },[]);

    return (
        <div className="product">
            <img src="https://picsum.photos/220/180" alt="picture"></img>
            <h5>{props.data.title}</h5>

            <div className="priceTotal">
                <label>Price: ${props.data.price.toFixed(2)}</label>
                <label>Total: ${props.data.price.toFixed(2)}</label>
            </div>
            <QuantityPicker />
            <button>Add</button>
        </div>
    );
}
export default Product;