import DataContext from "../state/dataContext";
import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useState, useContext } from "react";

function Product(props) {
  const [totalPrice, setTotalPrice] = useState(props.data.price.toFixed(2));
  const [quantity, setQuantity] = useState("");
  const cart = useContext(DataContext).cart;

  const globalAdd = useContext(DataContext).addProductToCart;

  const handleChange = (quantity) => {
    setQuantity(quantity);
    const newTotal = quantity * props.data.price;
    setTotalPrice(newTotal.toFixed(2));
  };

  function handleAdd() {
    const existingProduct = cart.find((p) => p._id === props.data._id);

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      globalAdd({ ...props.data, quantity: quantity });
    }
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
