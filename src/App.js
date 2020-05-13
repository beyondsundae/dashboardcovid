import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import NewCase from './Pages/NewCase';
function App() {
  return (
    <div id="wrapper">
    <Router>
        <Switch>
          <Route exact path="/NewCase" component={Home} />
          <Route exact path="/" component={NewCase} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
