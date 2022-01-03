import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, inputNumber, inputNumberChange, totalClicks } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter count={this.props.count} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement}  
        onInputNumber={this.props.onInputNumber} onInputNumberChange={this.props.onInputNumberChange} onTotalClicks={this.props.onTotalClicks} clicks={this.props.clicks}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onInputNumber: () => dispatch(inputNumber()),
    onInputNumberChange: (number) => dispatch(inputNumberChange(number)),
    onTotalClicks: () => dispatch(totalClicks())

 
  };
}
function mapStateToProps(state) {
    return {
      count: state.count,
      numberInputted: state.numberInputted,
      clicks: state.clicks
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);