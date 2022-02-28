import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';
import DataFetching from './components/DataFetching';
//import ClassCounterOne from './components/ClassCounterOne';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import IntervalHookCounter from './components/IntervalHookCounter';
//import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

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
      <IntervalHookCounter /><br />
      <DataFetching /><br />
      <UserContext.Provider value={'John'}>
        <ChannelContext.Provider value={'React'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
      <CounterOne />
      
    </div>
  );
}

export default App;
