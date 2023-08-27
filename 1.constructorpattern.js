function App(){
return(
  <div>
  <div>
  <TodoList/>
  </div>

  <div>
  <TodoList/>
  </div>
  </div>
)
}

export default App



import React, { useState, useEffect } from 'react';
import Todos from './Todos';
export default function TodoList(){
  const[store] = useState(new Todos())
  const[todos,setTodos] = useState(store.getTodos())

  return(
    <div>
    <ul>
    {todos.map((todo,index)=>{
      <li key={index} onClick={()=>{}}>
               {todo}
      </li>
    })}
    </ul>

      <div>
      <button onClick={()=>store.addTodo("test todo"+(Math.random()*300).toFixed()); setTodos([...store.getTodos()])}>Add Todo!</button>
      </div>
    </div>
  )

}

class Todos{
  todos = []
  constructor(){}
  getTodos(){
  return this.todos
  }
  addTodos(sometext){
  this.todos.push(sometext)
  }
}

export default Todos;
