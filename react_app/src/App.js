import logo from './logo.svg';
import './App.scss'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About, Resume, Contact } from "./components";

function App() {
  return (
    <div className="body App">
      <div className="main-content">
        <Router>
          <Switch>
            <Route path="/" exact component={() => <About />} />
            <Route path="/resume" exact component={() => <Resume />} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
