import React, {useState} from 'react'
import CartContext from './CartContext'

 const CartProvider = (props) => {

    const [item, setItem] = useState(0)

     const addItem = (item) => {

     }

     const removeItem = (item) => {

     }

     const cartContext = {
         items: [],
         totalAmount: 0,
         addItem: addItem, 
         removeItem: removeItem
     }
    return (
 
         <CartContext.Provider value={cartContext}>
             {props.children}
        </CartContext.Provider>   
   
    )
}

export default CartProvider
