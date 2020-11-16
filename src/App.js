import React from 'react';
import './App.css';
import { BrowserRouter as HashRouter, Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import NewCase from './Pages/NewCase';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  return (
    <div id="wrapper">
      {/* <HashRouter > */}
    {/* <Router> */}
     
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/NewCase" component={NewCase} />
          <Route component={NotFoundPage} />
        </Switch>
       
      {/* </Router> */}
      {/* </HashRouter> */}
    </div>
  );
}

export default App;