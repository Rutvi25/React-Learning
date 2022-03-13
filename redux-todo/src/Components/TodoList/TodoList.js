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
    <div>
      {
        displayTaskList = listItems.map((task) => {
          const { id, data, todoCompletionStatus} = task
          return(
            <UserTask key={id} id={id} title={data} todoCompletionStatus={todoCompletionStatus}/>  
          )
        })
      }   
    </div>
  }
  return (
    <div className='task-container'>
      {displayTaskList}
    </div>
  )
}

export default TodoList