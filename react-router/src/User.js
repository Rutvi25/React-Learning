import React from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom';

function User() {
  const {fname, lname} = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <div>User {fname} {lname}</div>
      <p>location: {location.pathname}</p>
      {
        location.pathname === `/user/john/doe` 
        ? <button onClick={() => navigate('/')}>Go Back</button>
        : null
      }
    </> 
  )
}

export default User