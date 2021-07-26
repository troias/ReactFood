import React, { useReducer } from "react";
import OrderContext from "./OrderContext";

const defaultOrderState = {
  order: {
    name: "",
    email: " ",
    city: "",
    postalCode: 1,
    items: [],
    totalAmount: 0,
  },
};

const orderReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_ORDER":
      return {  
        ...action.payload };

    default:
  }
};

const OrderProvider = (props) => {
  const [orderState, dispOrderAction] = useReducer(
    orderReducer,
    defaultOrderState
  );

  const createOrder = (order) => {
    dispOrderAction({
      type: "CREATE_ORDER",
      payload: order,
    });
  };

  const orderContext = {
    order: {
      name: orderState.name,
      email: orderState.email,
      city: orderState.city,
      postalCode: orderState.postalCode,
      items: orderState.items,
      totalAmount: orderState.totalAmount,
    },

    createOrder: createOrder,
  };
  return (
    <OrderContext.Provider value={orderContext}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
