import React from 'react'
import MealsSummary from '../MealSummary/MealsSummary'
import MealsList from '../MealList/MealsList'
import {useContext } from 'react';
import CartContext from '../../../contextStore/CartContext';



const MealsContainer = () => {
    const cartCTX = useContext(CartContext)
    return (
        <>
        {console.log(cartCTX.items)}
            <MealsSummary />
            <MealsList />
        </>

    )
}

export default MealsContainer
