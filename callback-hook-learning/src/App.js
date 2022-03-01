import './App.css';
import ClassTimer from './components/ClassTimer';
import Counter from './components/Counter';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import HookTimer from './components/HookTimer';
import ParentComponent from './components/ParentComponent';
import RefHook from './components/RefHook';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <ParentComponent /><br />
      <Counter /><br />
      <RefHook /><br />
      <ClassTimer />
      <HookTimer /><br />
      <DocTitleOne />
      <DocTitleTwo /><br />
      <CounterOne />
      <CounterTwo /><br />
      <UserForm />
    </div>
  );
}

export default App;
