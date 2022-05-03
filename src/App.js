import React, { Component }  from 'react';
import './App.css';
import {useSelector} from 'react-redux'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/navbar/navbar';
import Contas from './pages/Contas';
import Home from './pages/Home';

function App() {
  const contaList = useSelector((state) => state.contas.value)
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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
