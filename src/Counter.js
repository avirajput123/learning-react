import React, { useState } from 'react';
export default function () {
  const [counter, setCounter] = useState(0);

  function add() {
    console.log(counter);
    setCounter((prevVal) => prevVal + 1);
  }

  function sub() {
    console.log(counter);
    setCounter((prevVal) => prevVal - 1);
  }

  console.log('page render hua');
  return (
    <div>
      <button onClick={add}>+</button>
      {counter}
      <button onClick={sub}>-</button>
    </div>
  );
}
