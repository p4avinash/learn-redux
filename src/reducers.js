const initialCounterState = {
    counter: 0,
}

export const counterReducer = (state = initialCounterState, action = {}) => {
    switch(action.type){
        case 'INCREMENT':
            return Object.assign({}, state, {counter: state.counter + 1})
        case 'DECREMENT':
            return Object.assign({}, state, {counter: state.counter - 1})
        default:
            return state
    }
}


const initialTextState = {
    textbox: ''
}
export const textReducer = (state = initialTextState, action = {}) => {
    switch(action.type){
        case 'TEXTBOX':
            return Object.assign({}, state, {textbox: action.payload})
        default:
            return state
    }
}