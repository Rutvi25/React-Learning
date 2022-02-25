import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';

function App() {
  return (
    <div className="App">
      <ClassCounter /><br />
      <HookCounter /><br />
      <HookCounterTwo />
      <br />
      <HookCounterThree />
    </div>
  );
}

export default App;
