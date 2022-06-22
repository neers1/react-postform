import React, { useState } from 'react'

const Counter = () => {
    const [number, setNumber] = useState(0);
  return (
    <>
    <div>Counter</div>
    <button onClick = {()=>setNumber(number+1)}>Click me!</button>
    <p>{number}</p>
    </>
  )
}

export default Counter