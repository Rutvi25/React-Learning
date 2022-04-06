import React from 'react'
type StatusProps = {
  status: 'loading' | 'success' | 'error'
}

function Status(props: StatusProps) {
  let message 
  if (props.status === 'loading') {  
    message = 'loading...'
  } else if (props.status === 'success') {
    message = 'Data fetched successfully'
  } else if (props.status === 'error') {
    message = 'Error fetching data'
  }
  return (
    <div>
      <h2>status: {message}</h2>
    </div>
  )
}

export default Status