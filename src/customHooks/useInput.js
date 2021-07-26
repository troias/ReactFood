import { useReducer } from 'react'

const defaultObj = {
    enteredValue: "",
    hasError: false,
    touched: false,
    valueIsValid: false,
}

const inputReducer = (state, action) => {
    switch (action.type) {
        case "VALUE_CHANGED":
            return {
                ...state, 
                enteredValue: action.payload
            }
        case "INPUT_BLUR":
            return {
                ...state, 
                touched: true
            }
        case "RESET":
            return {
                ...state, 
                touched: false, 
                enteredValue: ""
            }

        default:
            break;
    }
}



 const useInput = (validateValue) => {
    const [state, dispatch] = useReducer(inputReducer, defaultObj)
   
    state.valueIsValid = validateValue(state.enteredValue)
    state.hasError = !state.valueIsValid && state.touched

    
    const inputBlurHandler = () => {
        dispatch({
            type: "INPUT_BLUR"
        })
    }
    const reset = () => {
        dispatch({
            type: "RESET"
         })
    }
    
    const valueChangedHandler = (event) => {
        dispatch({ 
            type: "VALUE_CHANGED", 
            payload: event.target.value
        })
    }
  
    

    return {
        value: state.enteredValue,
        hasError: state.hasError,
        isValid: state.valueIsValid, 
        inputBlurHandler,
        valueChangedHandler,
        reset, 
    }
}

export default useInput