import logo from './logo.svg';
import './App.scss'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from './components/Menu'
import { About, Resume, Contact } from "./components";

function App() {
  return (
    <div className="body App">
      <Menu/>
      <div className="main-content">
        <Router>
          <Switch>
            <Route path="/" exact component={() => <About />} />
            <Route path="/resume" exact component={() => <Resume />} />
            <Route path="/contact" exact component={() => <Contact />} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
