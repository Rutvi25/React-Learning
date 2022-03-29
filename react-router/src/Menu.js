import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <>
      <NavLink to='/' > About Us </NavLink>
      <NavLink to='/contact' > Contact </NavLink> 
      <NavLink to='/user/john/doe' > User </NavLink> 
    </>
  )
}

export default Menu