export const emailValidator = (value) => {
    return value.includes('@') && value.trim() !== ''
}

export const nameInputValidator = (value) => {
    return value.trim() !== ""
}

export const postalCodeInputValidator = (value) => {
    return !isNaN(value) && value.length > 0 && value.length  < 6
}

export const cityInputValidator = (value) => {
    return value.trim() !== ""
}