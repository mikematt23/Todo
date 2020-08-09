import React from 'react';


const TodoItem = (props)=>{
  return (
    <div>
      <li>{props.item}</li>
      <button onClick = {props.delete}>delete</button>
    </div>
  )
}
export default TodoItem