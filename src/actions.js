export const incrementAction = () => {
    return{
        type: 'INCREMENT',
    }
}

export const decrementAction = () => {
    return{
        type: 'DECREMENT',
    }
}

export const textAction = (text) => {
    return{
        type: 'TEXTBOX',
        payload: text
    }
}