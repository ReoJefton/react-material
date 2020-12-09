import './App.css';
import AppBar from './AppBar.js';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router basename='/react-portfolio'>
      <div className='App'>
        <AppBar />
        <div>
          {/* <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </nav> */}

          {/* A <Switch> looks through its children <Route>s and
           renders the first one that matches the current URL. */}
          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
  // function Home() {
  //   return <h2>Home</h2>;
  // }

  // function About() {
  //   return <h2>About</h2>;
  // }

  // function Users() {
  //   return <h2>Users</h2>;
  // }
}

export default App;
