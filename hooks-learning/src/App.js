import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
//import ClassCounterOne from './components/ClassCounterOne';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import IntervalHookCounter from './components/IntervalHookCounter';
//import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';

function App() {
  return (
    <div className="App">
      <ClassCounter /><br />
      <HookCounter /><br />
      <HookCounterTwo /><br />
      <HookCounterThree /><br />
      <HookCounterFour /><br />
      <HookCounterOne /><br />
      {/* <HookMouse /> */}
      {/* <ClassCounterOne /> */}
      <MouseContainer />
      <IntervalHookCounter />
    </div>
  );
}

export default App;
