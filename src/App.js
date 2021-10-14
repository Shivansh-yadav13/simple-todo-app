import React from 'react'
import Todo from './Components/Pages/Todo'
import './Components/CSS/styles.css'

function App() {
  return (
    <div className="todo-app">
      <h1 className="app-name">SIMPLE TODO LIST APP</h1>
      <Todo />
    </div>
  )
}

export default App;
