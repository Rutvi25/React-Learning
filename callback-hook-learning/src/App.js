import './App.css';
import ClassTimer from './components/ClassTimer';
import Counter from './components/Counter';
import HookTimer from './components/HookTimer';
import ParentComponent from './components/ParentComponent';
import RefHook from './components/RefHook';

function App() {
  return (
    <div className="App">
      <ParentComponent /><br />
      <Counter /><br />
      <RefHook /><br />
      <ClassTimer />
      <HookTimer />
    </div>
  );
}

export default App;
