import React, { createContext } from 'react';
import { useObserver, useLocalStore } from 'mobx-react';

import './App.css';

const StoreContext = createContext()
const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    bugs: ['Centipede'],
    addBug: bug => {
      store.bugs.push(bug);
    },
    get BugsCount() {
      return store.bugs.length;
    }
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

const BugsList = () => {
  const store = React.useContext(StoreContext);

  return useObserver(() => (
    <ul>
      {store.bugs.map(bug => (
        <li key={bug}>{bug}</li>
      ))}
    </ul>
  ))
}

const BugsHeader = () => {
  const store = React.useContext(StoreContext);
  return useObserver(() => <h2>{store.BugsCount} bugs!</h2>)
}

const BugsForm = () => {
  const store = React.useContext(StoreContext);
  const [bug, setBug] = React.useState("");
  return (
    <form
      onSubmit={e => {
        store.addBug(bug);
        setBug('');
        e.preventDefault();
      }}
    >
      <input type={'text'} value={bug} onChange={e => setBug(e.target.value)} />
      <button type={'submit'}>Add</button>
    </form>
  )
}

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <BugsHeader />
        <BugsList />
        <BugsForm />
      </div>
    </StoreProvider>
  );
}

export default App;