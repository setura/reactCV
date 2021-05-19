import logo from './logo.svg';
import './App.scss'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About, Resume} from "./components";
import React, { Component }  from 'react';

function App() {
  return (
    <div className="body App">
      <div className="main-content">
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/" exact component={() => <About />} />
            <Route path="/resume" component={() => <Resume />} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
