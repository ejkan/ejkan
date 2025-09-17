import Clock from './components/Clock';
import Greeting from './components/Greeting';
import UserCard from './components/UserCard';
import Welcome from "./components/Welcome";
import Footer from './components/Footer';

function App() {

  return (
      <div className="App">
          <Welcome />
          <Greeting />
          <UserCard />
          <Clock />
          <Footer />
      </div>
  )
}

export default App
