import DataContext from "./dataContext";
import { useState } from "react";

function GlobalState(props) {
  const [cart, setCart] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [user, setUser] = useState([]);

  function addProductToCart(prod) {
    //find if item already exists in cart
    let found = false;

    //map each item in the array,  if _id matches increase counter
    let copy = cart.map((p) => {
      if (p._id === prod._id) {
        found = true;
        return { ...prod, quantity: p.quantity + 1 };
      }
      return p;
    });
    if (!found) {
      copy.push({ ...prod, quantity: 1 });
    }

    setCart(copy);
  }

  function removeProductFromCart(_id) {
    const updateCart = cart.filter((product) => product._id !== _id);
    setCart(updateCart);
    console.log(updateCart);
  }

  return (
    <DataContext.Provider
      value={{
        cart: cart,
        itemList: itemList,
        user: user,

        addProductToCart,
        removeProductFromCart,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
export default GlobalState;
