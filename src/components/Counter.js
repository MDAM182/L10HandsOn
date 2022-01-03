import React from 'react';

const Counter = ({ count, onDecrement, onIncrement,onInputNumberChange, numberInputted, onInputNumber, clicks }) => {

    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <br />
          <p>Times the increment/decrement buttons have been clicks:  <span>{clicks}</span></p>
          <br />
          <input type="text" onChange={event => onInputNumberChange(event.target.value)} value={numberInputted}/> <button onClick={onInputNumber}>Change Count</button>
        </div>
      </div>
    );
}


export default Counter;

 // <button onClick={onReset}>Reset</button>

//  <p>Times the increment/decrement buttons have been clicked:  </p>