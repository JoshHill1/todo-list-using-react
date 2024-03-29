import React, { useState } from 'react'
import TodoList from './TodoList'


export default function App() {
  const [todos, setTodos] = useState([{ id: 1, name: 'Todo 1 ', complete: false }])
  return (
    <div>
      <TodoList todos = {todos}/>
      <input type='text' />
      <button>Add Todo</button>
      <button>Clear Completed</button>
      <div>0 left to do.</div>
    </div>
  )
}