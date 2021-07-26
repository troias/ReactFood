import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../contextStore/CartContext";
import CartItem from "./CartItem/CartItem";
import OrderForm from "../UI/Forms/OrderForm";
import OrderContext from "../../contextStore/OrderContext";
import modalsClasses from "../UI/Forms/Modal.css";

const Cart = (props) => {
  const cartCTX = useContext(CartContext);
  const orderCTX = useContext(OrderContext);

  const totalAmount = `$${cartCTX.totalAmount.toFixed(2)}`;
  const hasItems = cartCTX.items.length > 0;

  // const hasOrderItems = orderCTX.items.length > 0
  const [confirmation, setConfirmation] = useState(false);
  const [success, setSuccess] = useState(false);
  const [valid, setValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  console.log("orderCTX", orderCTX);

  const requestConfig = (order) => {
    return {
      method: "POST",
      headers: {},
      body: JSON.stringify(order),
    };
  };

  const sendOrderInfo = async (order) => {
    try {
      setIsSubmitting(true);
      const res = await fetch(
        "https://food-app-a635f-default-rtdb.firebaseio.com/order.json",
        requestConfig(order)
      );

      if (!res.ok) {
        throw new Error("Request Failed");
      }
      // const data = await res.json()
      setSuccess(true);
      
    } catch (error) {
      setSuccess(false);
    }
    setIsSubmitting(false);
  };

  const orderInfoHandler = (obj) => {
    orderCTX.createOrder({
      name: obj.name,
      email: obj.email,
      city: obj.city,
      postalCode: obj.postalCode,
      items: cartCTX.items,
      totalAmount: cartCTX.totalAmount,
    });
    console.log("orderCTX.order", orderCTX.order);
  };

  const orderCartItems = () => {
    sendOrderInfo(orderCTX.order);
    cartCTX.clearCart()
  };

  const validityChecker = (value) => {
    setValid(value);
  };

  const confirmationChecker = (value) => {
    setConfirmation(value);
  };

  const cartItemRemoveHandler = (id) => {
    cartCTX.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCTX.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes[`cart-items`]}>
      {cartCTX.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const cartModlaContent = (
    <>
      {cartItems}

      {hasItems && (
        <OrderForm
          onClose={props.onHideCart}
          valid={validityChecker}
          orderHandler={orderInfoHandler}
          confirmation={confirmationChecker}
        />
      )}

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className={classes.actions}>
        <button className={classes[`button--alt`]} onClick={props.onHideCart}>
          {" "}
          Close
        </button>
        {hasItems && valid && confirmation && (
          <button className={classes.button} onClick={orderCartItems}>
            {" "}
            Order
          </button>
        )}
      </div>
    </>
  );

  const isSubmittingModalContent = <p> Sending order data</p>;
  const successSubmitted = (
    <>

      <div className={classes.actions} style={{
       justifyContent: 'center', display: 'flex'
      }}>
        Order Sent
        <button className={classes.button} onClick={props.onHideCart}>
          Close
        </button>
      </div>
    </>
  );
  return (
    <>
      <Modal onClose={props.onHideCart}>
        {!isSubmitting && !success && cartModlaContent}
        {isSubmitting && isSubmittingModalContent}
        {!isSubmitting && success && successSubmitted}
      </Modal>
    </>
  );
};

export default Cart;
