import React from 'react';
import { Route, Routes } from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Error from './Error';
import './App.css';
import Menu from './Menu';
import User from './User';

function Name() {
  return (
    <div>Name</div>
  )
}

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/contact/name' element={<Name />} />
        <Route path='/user/:fname/:lname' element={<User />} />
        <Route element={<Error />}/>
      </Routes>
    </>
  );
}

export default App;
