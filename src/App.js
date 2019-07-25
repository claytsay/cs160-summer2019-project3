import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Instructor from "./Instructor";
import Student from "./Student";

function App() {
  return (
    <div className="App">
      <Router basename={"/"}>
        <Switch>
          <Route path={`/`} exact component={Home} />
          <Route path={`/student`} component={Student} />
          <Route path={`/instructor`} component={Instructor} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
