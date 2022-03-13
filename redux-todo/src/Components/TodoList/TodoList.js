import React from 'react'

import EmptyList from '../EmptyList/EmptyList';
import UserTask from '../UserTask/UserTask';
import './TodoList.css'

function TodoList(props) {
  const { listItems } = props
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