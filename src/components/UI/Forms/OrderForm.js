import React, { useEffect } from "react";
import useInput from "../../../customHooks/useInput";

import {
  emailValidator,
  nameInputValidator,
  postalCodeInputValidator,
  cityInputValidator,
} from "../../../UtilityFunctions/inputValidationFunctions";

const OrderForm = (props) => {

  const {
    value: enteredNameValue,
    hasError: nameInputError,
    valueChangedHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    isValid: valueIsValid,
    // reset: resetInput
  } = useInput(nameInputValidator);

  const {
    value: enteredEmailValue,
    hasError: emailInputError,
    valueChangedHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    isValid: emailIsValid,
    // reset: resetEmail
  } = useInput(emailValidator);

  const {
    value: enteredPostalCodeValue,
    hasError: enteredPostalCodeInputError,
    valueChangedHandler: enteredPostalCodeChangeHandler,
    inputBlurHandler: enteredPostalCodeInputBlurHandler,
    isValid: enteredPostalCodeIsValid,
    // reset: enteredPostalCodeEmail
  } = useInput(postalCodeInputValidator);

  const {
    value: enteredCityValue,
    hasError: enteredCityInputError,
    valueChangedHandler: enteredCityChangeHandler,
    inputBlurHandler: enteredCityInputBlurHandler,
    isValid: enteredCityIsValid,
    // reset: enteredCityEmail
  } = useInput(cityInputValidator);

  const formValid =
    valueIsValid &&
    emailIsValid &&
    enteredCityIsValid &&
    enteredPostalCodeIsValid;



  const sendOrderHandler = (event) => {
    event.preventDefault();
    const orderInfo = {
      name: enteredNameValue,
      email: enteredEmailValue,
      city: enteredCityValue,
      postalCode: enteredPostalCodeValue,
    };

    if (formValid) {
        props.valid(true);
      }

    props.orderHandler(orderInfo);
    // console.log(orderInfo)
  };


  return (
    <form>
      <label value="Name"> Name</label>
      <br />
      <input
        placeholder="Name"
        type="text"
        id="name"
        value={enteredNameValue}
        onChange={nameChangeHandler}
        onBlur={nameInputBlurHandler}
      />

      <br />
      <label value="Name">Email</label>
      <br />
      <input
        placeholder="Email"
        type="email"
        id="email"
        value={enteredEmailValue}
        onChange={emailChangeHandler}
        onBlur={emailInputBlurHandler}
      />
      <br />
      <label value="Name">Postal Code</label>
      <br />
      <input
        placeholder="Postal Code"
        type="text"
        id="Postal Code"
        value={enteredPostalCodeValue}
        onChange={enteredPostalCodeChangeHandler}
        onBlur={enteredPostalCodeInputBlurHandler}
      />
      <br />
      <label value="Name">City</label>
      <br />
      <input
        placeholder="City"
        type="text"
        id="City"
        value={enteredCityValue}
        onChange={enteredCityChangeHandler}
        onBlur={enteredCityInputBlurHandler}
      />
      <br />
      <button type="button" onClick={props.onClose}> Cancel</button>
      {formValid && <button onClick={sendOrderHandler}>Confirm </button>}

      {nameInputError && <p className={"error-text"}> Cannot be empty </p>}
      {emailInputError && (
        <p className={"error-text"}> Does not include "@" </p>
      )}
      {enteredPostalCodeInputError && (
        <p className={"error-text"}> Has to be a number over 1 and under 6 </p>
      )}
      {enteredCityInputError && (
        <p className={"error-text"}> Can't be empty </p>
      )}
    </form>
  );
};

export default OrderForm;
