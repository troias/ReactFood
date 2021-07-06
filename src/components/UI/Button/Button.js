import React from 'react'
import classes from './Button.module.css'
import CartIcon from '../Icons/CartIcon'

const Button = (props) => {
    return (
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>

            <span  className={classes.badge}>
            3
            </span>
            {props.children}
        </button>
    )
}

export default Button
