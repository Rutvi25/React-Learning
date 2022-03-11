import React from 'react'
import { useSelector } from 'react-redux';

import EmptyList from '../EmptyList/EmptyList';
import UserTask from '../UserTask/UserTask';
import './TodoList.css'

function TodoList() {
  const listItems = useSelector((state) => state.todoReducers.listItems)
  let displayTaskList;
  if(listItems.length === 0) {
    displayTaskList = <EmptyList />
  }
  else {
    <>
      {
        displayTaskList = listItems.map((task) => {
          return(
            <UserTask key={task.id} title={task.data}/>  
          )
        })
      }   
    </> 
  }
  return (
    <div className='task-container'>
      {displayTaskList}
    </div>
  )
}

export default TodoList