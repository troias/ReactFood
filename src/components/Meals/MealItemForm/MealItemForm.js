import React from 'react'
import styles from './MealItemForm.module.css'
import Input  from '../../UI/Input/Input'

const MealItemForm = (props) => {
    return (
        <>
            <form action="" className={styles.form}>
                <Input label="Amount" input={{
                    id: 'Amount_' + props.id,
                     type: 'number',
                     min: '1', 
                     max: `100`, 
                     step: 1,
                     defaultValue: 1
                    }}/>
                <button>
                    Add +
                </button>
            </form>

        </>
    )
}

export default MealItemForm
