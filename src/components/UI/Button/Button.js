import React, {useContext, useEffect, useState} from 'react'
import classes from './Button.module.css'
import CartIcon from '../Icons/CartIcon'
import CartContext from '../../../contextStore/CartContext'

const Button = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
    const cartCTX = useContext(CartContext)
    const { items } = cartCTX

    useEffect(() => {
        if (items.length === 0) {
            return
        }
        setBtnIsHighlighted(true)

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false)
        }, 300 );

        return () => {
        clearTimeout(timer)  
        }
      
    }, [items])

    const numCartItems = items.reduce((acc, item) => {
        return acc + item.amount
    }, 0)

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : "" }`

    return (
        <button className={btnClasses} onClick={props.onClick}>
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
