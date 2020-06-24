import React from 'react';
import './App.css';
import { BrowserRouter as HashRouter, Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import NewCase from './Pages/NewCase';
function App() {
  return (
    <div id="wrapper">
      {/* <HashRouter > */}
    {/* <Router> */}
     
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/NewCase" component={NewCase} />
        </Switch>
       
      {/* </Router> */}
      {/* </HashRouter> */}
    </div>
  );
}

export default App;