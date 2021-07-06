import React from 'react'
import classes from './InputStyle.module.css'

const Input = (props) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id} >{props.label}</label>
            <input  {...props.input}/>
        </div>
    )
}

export default Input