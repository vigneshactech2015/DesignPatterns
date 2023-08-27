import React, { useState } from 'react';
import TodoList from './TodoList';
import './style.css';
import todosInstance from './Todos';

export default function App() {
  const [todos, setTodos] = useState(todosInstance.getTodos());
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{ marginTop: 20 }}>
        <TodoList todos={todos} store={todosInstance} setTodos={setTodos} />
      </div>
      <div style={{ marginTop: 20 }}>
        <TodoList todos={todos} store={todosInstance} setTodos={setTodos} />
      </div>
    </div>
  );
}


import React, { useState, useEffect } from 'react';

const TodoList = ({ todos, setTodos, store }) => {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li
            className="rounded-sm text-sm w-full bg-slate-100 p-1.5 ring-0 ring-gray-800 mb-2"
            key={index}
            onClick={() => {}}
          >
            {todo}
          </li>
        ))}
      </ul>
      <div>
        <button
          className="mt-4 rounded-md hover:bg-gray-700 text-white px-3 py-1 shadow-md bg-blue-400"
          onClick={() => {
            store.addTodo('Test Todo ' + (Math.random() * 300).toFixed());
            setTodos([...store.getTodos()]);
            console.log(store.getTodos());
          }}
        >
          Add Todo!
        </button>
      </div>
    </div>
  );
};

export default TodoList;



const todos = [];
// let instance = null;

// class Todos {
//   constructor() {
//     if (instance !== null) {
//       throw new Error('You can only have one instance of Todos');
//     }
//     instance = this;
//   }
//   getInstance() {
//     return instance;
//   }
//   getTodos() {
//     return todos;
//   }
//   addTodo(todoText) {
//     todos.push(todoText);
//   }
// }

const TodosStore = {
  getInstance() {
    return instance;
  },
  getTodos() {
    return todos;
  },
  addTodo(todoText) {
    todos.push(todoText);
  },
};

// const todosInstance = new Todos();
Object.freeze(TodosStore);

export default TodosStore;
