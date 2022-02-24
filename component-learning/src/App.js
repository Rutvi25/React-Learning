import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import LifeCycleA from './components/LifeCycleA';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
function App() {
  return (
    <div className='App'>
      <Greet name='John' surname='Doe'/>
      <Welcome name='John' surname='Doe'/>
      <Hello />
      <Message />
      <Counter />
      <EventBind /><br/>
      <ParentComponent /><br/>
      <LifeCycleA /><br/>
      <ClickCounter name='John'/>
      <HoverCounter />
    </div>
  );
}

export default App;
