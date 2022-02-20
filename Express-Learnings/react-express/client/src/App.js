import logo from './logo.svg';
import './App.css';
import Custemors from './components/customers/customer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Custemors />
      </header>
    </div>
  );
}

export default App;
