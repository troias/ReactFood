import React, { useReducer } from 'react'
import CartContext from './CartContext'

const DefaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            const updatedItems = state.items.concat(action.payload)
            const newTotalAmount = state.totalAmount + action.payload.price * action.payload.amount
            return {
                items: updatedItems, 
                totalAmount: newTotalAmount
            }

        case "REMOVE_ITEM":
            return state.items + action.item
            default:
    }

    return DefaultCartState

}


const CartProvider = (props) => {

    const [cartState, dispCartAction] = useReducer(cartReducer, DefaultCartState)

    const addItem = (item) => {
        dispCartAction({ 
            type: 'ADD_ITEM', 
            payload: item
        })
    }

    const removeItem = (item) => {
        dispCartAction({ 
            type: 'REMOVE_ITEM', 
            payload: item
        })
    }

    const cartContext = {
        items: cartState.item,
        totalAmount: cartState.totalAmount,
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
