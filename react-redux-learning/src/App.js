import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store'
import CakeContainer from './Components/CakeContainer';
import HooksakeContainer from './Components/HooksakeContainer';
import IceCreamContainer from './Components/IceCreamContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
