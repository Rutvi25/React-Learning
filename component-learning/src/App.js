import Greet from "./components/Greet";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Greet name="John"/>
      <Welcome name="John"/>
    </div>
  );
}

export default App;
