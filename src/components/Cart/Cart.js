import React from 'react'
import classes from './Cart.module.css'

const Cart = () => {
    const cartItems = <ul className={classes[`cart-items`]}>
        {[{ id: 1, name: "sushi", amount: 2 }].map(item => <li> {item.name} </li>)}
    </ul>
    return (
        <div>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>$100,0000</span>
            </div>
            <div className={classes.actions}>
                <button className={classes[`button--alt`]}> Close</button>
                <button className={classes.button}> Order</button>
            </div>
        </div>
    )
}

export default Cart
