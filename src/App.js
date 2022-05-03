import React, { Component }  from 'react';
import './App.css';
import {useSelector} from 'react-redux'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/navbar';

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
              <div>Home</div>
            </Route>
            <Route exact path="/teste">
              <div>Teste</div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
