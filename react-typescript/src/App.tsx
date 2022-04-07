import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';
// import Container from './components/Container';
import LoggedIn from './components/states/LoggedIn';
// import User from './components/states/User';
import User from './components/context/User'
import { ThemeContextProvider } from './components/context/ThemeContext';
import Box from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import MutableRef from './components/ref/MutableRef';
import DomRef from './components/ref/DomRef';
import { Counter } from './components/class/Counter';
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';
import List from './components/generics/List';
import { RandomNumbers } from './components/restriction/RandomNumbers';
import { Toast } from './components/templateliterals/Toast';
import { Text } from './components/polymorphic/Text';

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
      <Greet name='root' isLoggedIn={false}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status='error' />
      <Oscar>
        <Heading>Heading</Heading>
      </Oscar>
      <br />
      <Button handleClick={ (event, id) => console.log('Button Clicked!', event, id) } />
      <br />
      <Input value='' handleChange={(event) => console.log(event)}/>
      <br />
      {/* <Container styles={{border: '5px solid'}}/> */}
      <LoggedIn />
      <br />
      <User />
      <br />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <br />
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <br />
      <DomRef />
      <MutableRef />
      <br />
      <Counter message='counter value: '/>
      <br />
      <Private isLoggedIn={true} component={Profile} />
      <br />
      <List items={['Apple', 'Banana', 'Mango']} onClick={(item) => {console.log(item)}}/>
      <List items={[1, 2, 3]} onClick={(item) => {console.log(item)}}/>
      <br />
      <RandomNumbers value={10} isPositive />
      <br />
      <Toast position='center' />
      <br />
      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' htmlFor='someId' size='sm' color='secondary'>Label</Text>
    </div>
  );
}

export default App;