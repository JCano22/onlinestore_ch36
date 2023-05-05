import "./cart.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../state/dataContext";

function Cart() {
  const { cart, removeProductFromCart } = useContext(DataContext);

  return (
    <div className="page cart">
      <h2>Proceed to checkout.</h2>
      <h3>You have {cart.length} products in your cart.</h3>
      <Link className="btn" to="/catalog">
        Check our Menu!
      </Link>

      {cart.map((prod) => (
        <div key={prod._id} className="prod-cont">
          <div className="prod-row">
            <img src={"/images/" + prod.image} alt="" />
            <h4>{prod.title}</h4>
            <p>
              ${(prod.price * prod.quantity).toFixed(2)} - Quantity:{" "}
              {prod.quantity}
            </p>
            <button
              onClick={() => removeProductFromCart(prod._id)}
              className="btn btn-sm"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
