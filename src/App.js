import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Bdy from './Components/Bdy';
import Contact from './Components/Contact'
import Belowheader from './Components/Belowheader';

function App() {
  return (
    <div className="App">
      <Header/>
      <Belowheader/>
      <NavBar/>
      <Bdy/>
      <Contact/>
    </div>
  );
}

export default App;
