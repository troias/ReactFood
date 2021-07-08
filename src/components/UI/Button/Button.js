import React, {useContext} from 'react'
import classes from './Button.module.css'
import CartIcon from '../Icons/CartIcon'
import CartContext from '../../../contextStore/CartContext'

const Button = (props) => {

    const cartCTX = useContext(CartContext)

    
    const numCartItems = cartCTX.items.reduce((acc, item) => {
        return acc + item.amount
    }, 0)

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>

            <span  className={classes.badge}>
            {numCartItems}
            </span>
            {props.children}
        </button>
    )
}

export default Button
