import "./product.css";
import QuantityPicker from "./quantityPicker";

function Product(){
    return (
        <div className="product">
            <img src="https://picsum.photos/220/180" alt="picture"></img>
            <h5>Title goes here</h5>
            <div className="priceTotal">
                <label>Price: $</label>
                <label>Total: $</label>
            </div>
            <QuantityPicker />
            <button>Add</button>
        </div>
    );
}
export default Product;