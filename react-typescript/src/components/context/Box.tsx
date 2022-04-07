import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
 
function Box() {
  const theme = useContext(ThemeContext)
  return (
    <div style={{background: theme.primary.main} }>Theme Context</div>
  )
}

export default Box