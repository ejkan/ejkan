import './App.css'
import Clock from './components/Clock';
import Greeting from './components/Greeting';
import UserCard from './components/UserCard';
import Welcome from "./components/Welcome";

function App() {

  return (
      <div className="App">
          <Welcome />
          <Greeting />
          <UserCard />
          <Clock />
      </div>
  )
}

export default App
