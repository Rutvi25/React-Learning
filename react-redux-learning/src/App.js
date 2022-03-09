import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store'
import CakeContainer from './Components/CakeContainer';
import HooksakeContainer from './Components/HooksakeContainer';
import IceCreamContainer from './Components/IceCreamContainer';
import NewCakeContainer from './Components/NewCakeContainer';
import ItemContainer from './Components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
        <ItemContainer cake />
        <ItemContainer />
      </div>
    </Provider>
  );
}

export default App;
