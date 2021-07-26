import React from 'react'

const OrderContext = React.createContext({
    order: {
        name: "",
        email: " ",
        city: "",
        postalCode: 1,
        items: [],
        totalAmount: 0,
    },
    createOrder: (order) => { }
})



export default OrderContext
