import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
function App() {
  return (
    <div className='App'>
      <Greet name='John'/>
      <Welcome name='John'/>
      <Hello />
    </div>
  );
}

export default App;
