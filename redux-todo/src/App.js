import React from 'react'
import { useSelector } from 'react-redux';

import './App.css'
import AddTodo from './Components/AddTodo/AddTodo'
import TodoDate from './Components/TodoDate/TodoDate'
import TodoList from './Components/TodoList/TodoList';

function App() {
  const listItems = useSelector((state) => state.todoReducers.listItems)
  return (
    <div className='App'>
      <div className='todo-list'>
        <TodoDate />
        <TodoList listItems={listItems} />
        <AddTodo listItems={listItems} />
      </div>
    </div>
  );
}

export default App;