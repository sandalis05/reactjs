import './App.css';
import Greet from './components/Greet'
import Hello from "./components/Hello"

function App() {
  return (
    <div className="App">
    <Greet name = "Bruce" heroName ="Batman"/>
    <Greet name = "Clark" heroName ="Superman"/>
    <Greet name = "Diana" heroName = "Wonder Woman"/>
    {/*  <Hello/> */}
    </div>
  );
}

export default App;
