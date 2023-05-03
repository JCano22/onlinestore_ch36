import DataContext from "../state/dataContext";
import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useState, useContext } from "react";

function Product(props) {
  const [totalPrice, setTotalPrice] = useState(props.data.price.toFixed(2));

  const globalAdd = useContext(DataContext).addProductToCart;

  const handleChange = (quantity) => {
    const newTotal = quantity * props.data.price;
    setTotalPrice(newTotal.toFixed(2));
  };

  function handleAdd() {
    console.log("adding" + props.data.title);
    globalAdd(props.data);
  }

  return (
    <div className="product">
      <img src={props.data.image} alt="picture"></img>
      <h5>{props.data.title}</h5>

      <div className="priceTotal">
        <label>Price: ${props.data.price.toFixed(2)}</label>
        <label>Total: ${totalPrice}</label>
      </div>
      <QuantityPicker onQuantityChange={handleChange} />
      <button onClick={handleAdd} className="btn btn-small addCartBtn">
        Add
      </button>
    </div>
  );
}
export default Product;
