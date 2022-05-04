import React, { Component }  from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import NavBar from './components/navbar/navbar';
import Contas from './pages/Contas';
import Home from './pages/Home';
import Usuarios from './pages/Usuarios';

function App() {
  return (
    <Router>
      <div className="App">
        {""}
        <NavBar />
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/contas">
              <Contas />
            </Route>
            <Route path="/usuarios">
              <Usuarios />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
