import React from 'react'

import './App.css'
import AddTodo from './Components/AddTodo/AddTodo'
import TodoDate from './Components/TodoDate/TodoDate'
import TodoList from './Components/TodoList/TodoList';

function App() {
  return (
    <div className='App'>
      <div className='todo-list'>
        <TodoDate />
        <TodoList />
        <AddTodo />
      </div>
    </div>
  );
}

export default App;