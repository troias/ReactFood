import React from "react";
import useInput from "../../../customHooks/useInput";
import classes from "./CheckOutForm.module.css";

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




  const orderInfo = {
    name: enteredNameValue,
    email: enteredEmailValue,
    city: enteredCityValue,
    postalCode: enteredPostalCodeValue,
  };


  const sendOrderHandler = (event) => {
    event.preventDefault();



    props.orderHandler(orderInfo);
    // console.log(orderInfo)
  };
 
  const formValid =
    valueIsValid &&
    emailIsValid &&
    enteredCityIsValid &&
    enteredPostalCodeIsValid;


  if (formValid) {
    props.valid(true);
  }
  const confirmationHandler = (event) => {
    props.confirmation(true)
  }

  return (
    <form className={classes.form} onSubmit={sendOrderHandler}>

      <div className={`${classes.control} ${valueIsValid ? "" : classes.invalid}`}>
        <label value="Name"> Name</label>

        <input
          placeholder="Name"
          type="text"
          id="name"
          value={enteredNameValue}
          onChange={nameChangeHandler}
          onBlur={nameInputBlurHandler}
        />
      </div>

      <div className={`${classes.control} ${emailIsValid ? "" : classes.invalid}`}>
        <label value="Name">Email</label>

        <input
          placeholder="Email"
          type="email"
          id="email"
          value={enteredEmailValue}
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
        />
      </div>

      <div className={`${classes.control} ${enteredPostalCodeIsValid ? "" : classes.invalid}`}>
        <label value="Name">Postal Code</label>

        <input
          placeholder="Postal Code"
          type="text"
          id="Postal Code"
          value={enteredPostalCodeValue}
          onChange={enteredPostalCodeChangeHandler}
          onBlur={enteredPostalCodeInputBlurHandler}
        />
      </div>

      <div className={`${classes.control} ${enteredCityIsValid ? "" : classes.invalid}`}>
        <label value="Name">City</label>

        <input
          placeholder="City"
          type="text"
          id="City"
          value={enteredCityValue}
          onChange={enteredCityChangeHandler}
          onBlur={enteredCityInputBlurHandler}
        />
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onClose}>
          {" "}
          Cancel
        </button>
        {formValid && <button className={classes.submit} onClick={confirmationHandler} >Confirm </button>}
      </div>

      <div className={classes.invalid}>
        {nameInputError && <label> Cannot be empty </label>}
      </div>
      <div className={classes.invalid}>
        {emailInputError && <label> Does not include "@" </label>}
      </div>
      <div className={classes.invalid}>
        {enteredPostalCodeInputError && (
          <label> Has to be a number over 1 and under 6 </label>
        )}
      </div>
      <div className={classes.invalid}>
        {enteredCityInputError && <label> Can't be empty </label>}
      </div>
    </form>
  );
};

export default OrderForm;
