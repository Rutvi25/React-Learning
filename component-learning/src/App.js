import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
function App() {
  return (
    <div className='App'>
      <Greet name='John' surname='Doe'/>
      <Welcome name='John' surname='Doe'/>
      <Hello />
      <Message />
      <Counter />
    </div>
  );
}

export default App;
