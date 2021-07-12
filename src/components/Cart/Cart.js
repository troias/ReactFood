import React, { useContext, useState } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal/Modal'
import CartContext from '../../contextStore/CartContext'
import CartItem from './CartItem/CartItem'


const Cart = (props) => {

    const cartCTX = useContext(CartContext)

    const totalAmount = `$${cartCTX.totalAmount.toFixed(2)}`
    const hasItems = cartCTX.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCTX.removeItem(id)
        // const existingItemIndex = cartCTX.items.findIndex(
        //     (item) => item.id === id
        //   );

        //   const existingItem = cartCTX.items[existingItemIndex];
        // console.log("existingItem", existingItem)
        // console.log(cartCTX)
    }

    const cartItemAddHandler = (item) => {
        cartCTX.addItem({...item, amount: 1})
    }

    const cartItems = <ul className={classes[`cart-items`]}>
        {cartCTX.items.map(item => <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)} />)}
    </ul>
 

    return (
        <Modal onClose={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes[`button--alt`]} onClick={props.onHideCart}> Close</button>
                {hasItems && <button className={classes.button}> Order</button>}
            </div>
        </Modal>
    )
}

export default Cart
