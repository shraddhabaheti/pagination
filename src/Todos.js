import React from 'react'
import { memo } from 'react'
const Todos = ({todos,addTodo}) => {
    console.log("ChiledRender")
  return (
    <div>
        <h2>MyTodo</h2>
      {
          todos.map((todo,index)=>{
             return <p key={index}>{todo+index}</p>
          })
      }
      <button onClick={addTodo}>AddTodo</button>
    </div>
  )
}

export default memo(Todos)
