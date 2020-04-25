import React from 'react';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewCase from './Pages/NewCase';
function App() {
  return (
    <div id="wrapper">
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/NewCase" component={NewCase} />
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
