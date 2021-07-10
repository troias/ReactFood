import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      
      const newTotalAmount = state.totalAmount + action.payload.price * action.payload.amount;
      const existingCartItemIndex = state.items.findIndex(item => item.id === action.payload.id)
      const existingCartItem = state.items[existingCartItemIndex]


      let updatedItems

      if (existingCartItem) {

        const updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount + action.payload.amount
        }
        updatedItems = [...state.items]
        updatedItems[existingCartItemIndex] = updatedItem
      } else {
         updatedItems = state.items.concat(action.payload)
      }
   
      
      return {
        items: updatedItems,
        totalAmount: newTotalAmount,
      };

    case "REMOVE_ITEM":
      
    
      const existingItemIndex = state.items.findIndex(item => item.id === action.id)
      const existingItem = state.items[existingItemIndex]

      const updatedTotalAmount = state.totalAmount - existingItem.price

      let updatedCartItem

      if (existingItem.amount === 1) {
          //returns true on all but id passed in from action  
        updatedCartItem = state.items.filter(item => item.id !== action.id)

          } else {
            updatedCartItem = {
                ...existingCartItem, 
                amount: updatedTotalAmount
          }
         
        return {
            items: updatedCartItem,
            totalAmount: updatedTotalAmount
        }
      }
      default:
  }
};

const CartProvider = (props) => {
  const [cartState, dispCartAction] = useReducer(cartReducer, defaultCartState);

  const addItem = (item) => {
    dispCartAction({
      type: "ADD_ITEM",
      payload: item,
    });
  };

  const removeItem = (item) => {
    dispCartAction({
      type: "REMOVE_ITEM",
      payload: item,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItem,
    removeItem: removeItem,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
