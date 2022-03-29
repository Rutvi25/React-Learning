import React from 'react';
import { Route, Routes } from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Error from './Error';
import './App.css';

function Name() {
  return (
    <div>Name</div>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/contact/name' element={<Name />} />
        <Route element={<Error />}/>
      </Routes>
    </>
  );
}

export default App;
