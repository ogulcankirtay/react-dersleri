import React, { useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  const removeTodo = (todoId) => {
    const exractedTodos = todos.filter((todo) => todo.id != todoId)
    setTodos([...exractedTodos])
  }
  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id != newTodo.id) {
        return todo
      }
      return newTodo
    })
    setTodos([...updatedTodos])
  }

  console.log(todos)

  return (
    <div className='App'>
      <div className='main'>
        <CreateTodo onCreateTodo={createTodo} />
        <TodoList
          onRemoveTodo={removeTodo}
          onUpdateTodo={updateTodo}
          todos={todos} />

      </div>
    </div>
  )
}

export default App
