import React from 'react'
import { useSelector } from 'react-redux';

import EmptyList from '../EmptyList/EmptyList';
import UserTask from '../UserTask/UserTask';
import './TodoList.css'

function TodoList() {
  let displayTaskList;
  const listItems = useSelector((state) => state.toReducers.listItems)
  if(listItems.length === 0) {
    displayTaskList = <EmptyList />
  }
  else {
    <>
      {displayTaskList = listItems.map((elem) => {
        return(
          <UserTask key={elem.id} title={elem.data}/>  
        )
      })}   
    </> 
  }
  return (
    <div className='task-container'>
      {displayTaskList}
    </div>
  )
}

export default TodoList