import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal/Modal'

const Cart = () => {
    const cartItems = <ul className={classes[`cart-items`]}>
        {[{ id: 1, name: "sushi", amount: 2 }].map(item => <li> {item.name} </li>)}
    </ul>
    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>$100,0000</span>
            </div>
            <div className={classes.actions}>
                <button className={classes[`button--alt`]}> Close</button>
                <button className={classes.button}> Order</button>
            </div>
        </Modal>
    )
}

export default Cart
