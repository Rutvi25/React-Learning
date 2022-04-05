import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  const personName = {
    first: 'John',
    last: 'Doe',
  }
  const nameList = [
    {
      first: 'John',
      last: 'Doe'
    },
    {
      first: 'Maria',
      last: 'Smith'
    },
    {
      first: 'Clark',
      last: 'Kent'
    }
  ]
  return (
    <div className="App">
      <Greet name='root' messageCount={20} isLoggedIn={false}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
