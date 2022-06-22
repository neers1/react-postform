import React from 'react'

const Welcome = (props) => {
    let listVisual = props.myList.map(
        el=> <p>{el}</p>
    )
  return (
    <div>
        <h1>Hello</h1>
        <h2>{props.name}</h2>
        <h3>Your age is {props.age}</h3>
        {listVisual}
    </div>
   
  )
}

export default Welcome