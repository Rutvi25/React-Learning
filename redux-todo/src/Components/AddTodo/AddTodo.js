import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSquareCheck, faTimesSquare} from '@fortawesome/free-solid-svg-icons';

import { addTodo } from '../../actions/index'
import './AddTodo.css'

function AddTodo() {
  const [displayAddTodoForm, setDisplayAddTodoForm] = useState(false)
  const [taskTitle, setTaskTitle] = useState('')
  const dispatch = useDispatch();
  // for adding new task
  const addNewTask = () => {
    if(!(taskTitle.trim())){
      alert('Task title can\'t be empty.')
    }
    else {
      dispatch(addTodo(taskTitle))
      setTaskTitle('')
    } 
  }
  // handle key events
  function handleKeyPress(e) {
    if(e.keyCode === 27) {
      setDisplayAddTodoForm(false)
    }
    else if (e.keyCode === 13) {
      addNewTask()
    }
  }
  // add todo form
  let showForm;
  if(displayAddTodoForm){
    showForm = 
      <div className='add-todo-form'>
          <input 
            autoFocus 
            type='text' 
            className='add-todo-input' 
            onKeyDown={handleKeyPress} 
            value={taskTitle} 
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <div>
            <FontAwesomeIcon 
              className='add-todo-submit' 
              icon={faSquareCheck} 
              onClick={addNewTask}
            />
          </div>
          <div>
            <FontAwesomeIcon 
              className='add-todo-cancel' 
              icon={faTimesSquare} 
              onClick={() => setDisplayAddTodoForm(false)}
            />
          </div>
      </div>
  }
  else {
    showForm = 
      <div className='add-todo-btn-container'>
        <button 
          className='add-todo-button' 
          onClick={() => setDisplayAddTodoForm(true)}
        >
          +
        </button>
      </div>
  }
  
  return (
    <>
      {showForm}
    </>
  )
}

export default AddTodo