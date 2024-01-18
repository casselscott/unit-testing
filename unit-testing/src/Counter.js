import React, { useState } from 'react';
import { BiColor, BiMinusCircle } from 'react-icons/bi';
import { BiPlusCircle } from 'react-icons/bi';

const Counter = () => {
  const [Counter, setCounter] = useState(1);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div className="Counter">
      <button data-testid="increase" onClick={increment}>
        <BiPlusCircle className="iconplus" />
      </button>
      <p data-testid="number">{Counter}</p>
      <button data-testid="decrease" onClick={decrement}>
        <BiMinusCircle className="iconminus" />
      </button>
    </div>
  );
};

export default Counter;
