import React, { useCallback, useState } from 'react'
import Todos from './Todos';
const Callbackhook = () => {
    const [todos,setTodos]=useState([]);
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    }
    const addTodo= useCallback(()=>{
        setTodos((prev)=>[...prev,`newData`])

    },[todos])
   
    return (
    <div>
        <Todos todos={todos} addTodo={addTodo} />
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default Callbackhook
