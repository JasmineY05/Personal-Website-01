// import './App.css';
import NavBar from "./NavBar";
import HomeScreen from './pages/HomeScreen';
import Experiences from './pages/Experiences';
import Education from './pages/Education';
import Hobbies from './pages/Hobbies'

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <HomeScreen/>
      break
    case "/Hobbies":
      component = <Hobbies/>
      break
    case "/Experiences":
      component = <Experiences/>
      break
    case "/Education":
      component = <Education/>
      break

  }
  return (
    <div className="App">

      <NavBar/>

      {component}

      <footer className="foot">
        <h2>Contact me:</h2>
        <p>
          416-677-1308 | j5yip@uwaterloo.ca | <a href='http://www.linkedin.com/in/jasmine-yip-1138j'>Linkedin</a>
        </p>

      </footer>
      
    </div>
  );
}

export default App;
