import Clock from './components/Clock';
import Greeting from './components/Greeting';
import UserCard from './components/UserCard';
import Welcome from "./components/Welcome";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App min-h-screen flex flex-col items-center justify-center p-4 md:p-8 w-full">
      <Welcome />
      <Greeting />
      <UserCard />
      <Clock />
      <Footer />
    </div>
  )
}

export default App;
