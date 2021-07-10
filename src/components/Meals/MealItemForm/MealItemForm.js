import React, { useRef, useState } from 'react'
import styles from './MealItemForm.module.css'
import Input from '../../UI/Input/Input'

const MealItemForm = (props) => {

    const [invalid, setValid] = useState(true)
    const cartAmmountRef = useRef(null)

    const submitHandler = (event) => {
        event.preventDefault()

        const enteredAmount = cartAmmountRef.current.value
        const enteredAmountNumber = +enteredAmount

        setValid(true)
        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5) {
            setValid(false)
            return
        }

        props.onAddtoCart(enteredAmountNumber)
    }

    return (
        <>
            <form onSubmit={submitHandler} className={styles.form}>
                <Input label="Amount" input={{
                    id: 'Amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: `100`,
                    step: 1,
                    defaultValue: 1
                }}
                    ref={cartAmmountRef} />
                <button>
                    Add +
                </button>
                {!invalid && <p>Please enter a valid amount </p>}
            </form>

        </>
    )
}

export default MealItemForm
