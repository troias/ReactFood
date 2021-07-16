import React from 'react'
import styles from './Header.module.css'
import meal from '../../../Assets/Images/meals.jpg'
import Button from '../../UI/Button/Button'

const Header = (props) => {
    return (
        <>
            <header className={styles.header}>
                <h1>React Meals</h1>
                <Button onClick={props.onShowCart}/>

            </header>
            <div className={styles['main-image']}>
                <img src={meal} alt="A Table full of food"  />
            </div>

        </>
    )
}

export default Header