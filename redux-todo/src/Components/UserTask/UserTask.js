import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBandcamp} from '@fortawesome/free-brands-svg-icons/faBandcamp'
import { useDispatch } from 'react-redux';
import { changeStatus } from '../../actions';

import './UserTask.css'

function UserTask(props) {
  const {title, todoCompletionStatus, id} = props
  const dispatch = useDispatch()

  let checkBox;
  if(todoCompletionStatus) {
    checkBox = <FontAwesomeIcon
                  icon={faBandcamp}
                  className='task-complete-icon'
                  onClick={() => dispatch(changeStatus(id))}
                />
  }
  else {
    checkBox = <input
                  type={'checkbox'}
                  onClick={() => dispatch(changeStatus(id))}
                  className='task-checkbox'
                  defaultChecked={false}
                />
  }
  return(
    <div className='task'>
      <div >
        {title}
      </div>
      {checkBox}
    </div>
  )
}

export default UserTask