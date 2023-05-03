import { createContext } from "react";

/*
Context is a promise/interface/plan for the data that will be stored it should not have any implementation
*/

const DataContext = createContext({
    cart: [],
    itemList: [],
    user: {},

    addProductToCart: () => {},
    removeProductFromCart: () => {},
});

export default DataContext;