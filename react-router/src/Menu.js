import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <>
      <NavLink to='/' > About Us </NavLink>
      <NavLink to='/contact' > Contact </NavLink> 
    </>
  )
}

export default Menu