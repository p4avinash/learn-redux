import React from 'react';

const Counter = ({onIncrement, onDecrement, counter}) => {
    return(
        <div>
            <h3>Count: {counter}</h3>
            <div>
                <button onClick={onIncrement} >Increment</button>
                <button onClick={onDecrement} >Decrement</button>
            </div>
        </div>
    )
}

export default Counter;