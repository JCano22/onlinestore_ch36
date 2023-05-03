import DataContext from "./dataContext";
import { useState } from "react";

function GlobalState(props) {
  const [cart, setCart] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [user, setUser] = useState([]);

  function addProductToCart(prod) {
    let copy = [...cart, prod];
    setCart(copy);
  }

  function removeProductFromCart() {}

  return (
    <DataContext.Provider
      value={{
        cart: cart,
        itemList: itemList,
        user: user,

        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
export default GlobalState;
