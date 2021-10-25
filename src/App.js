import React from 'react';
import './App.css';
import Counter from './components/counter.component';
import Textbox from './components/textbox.component';
import {connect} from 'react-redux'
import { incrementAction, decrementAction, textAction } from './actions';

const mapStateToProps = (state) => {
  return{
    counter: state.counterReducer.counter,
    textbox: state.textReducer.textbox
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onIncrement: () => dispatch(incrementAction()),
      onDecrement: () => dispatch(decrementAction()),
      onTextChange: (event) => dispatch(textAction(event.target.value))
    }
}

class App extends React.Component{
  render(){

    const {onIncrement, onDecrement, onTextChange, textbox, counter} = this.props

    return (
      <div className="App">
        <Counter onIncrement={onIncrement} onDecrement={onDecrement} counter={counter} />
        <div style={{marginTop: '20px'}}>
          <Textbox onTextChange={onTextChange} textbox={textbox} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
