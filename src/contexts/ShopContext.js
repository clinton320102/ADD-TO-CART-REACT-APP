import { createContext, useContext, useReducer } from "react";
import shopReducer, { initialState } from "./shopReducer";

const ShopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  // ADD TO CART
  const addToCart = (product) => {
    const updatedCart = state.products.concat(product);
    updatePrice(updatedCart)

    dispatch({
      type: "ADD_TO_CART",
      payload: { products: updatedCart }
    })
  }

  // REMOVE FROM CART
  const removeFromCart = (product) => {
    const updatedCart = state.products.filter(currentProduct => currentProduct.name !== product.name);
    updatePrice(updatedCart)

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { products: updatedCart }
    })
  }

  // UPDATE TOTAL PRICE
  const updatePrice = (products) => {
    let total = 0;
    products.forEach(product => total += product.price);

    dispatch({
      type: "UPDATE_PRICE",
      payload: { total }
    })
  }

  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeFromCart
  }

  return (
    <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
  )
}

const useShopContext = () => {
  const context = useContext(ShopContext);

  return context
}

export default useShopContext;