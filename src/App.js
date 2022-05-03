import React, { Component }  from 'react';
import './App.css';
import {useSelector} from 'react-redux'

function App() {
  const contaList = useSelector((state) => state.contas.value)
  return (
    <div className="App">
      {""}
      <div>
        {contaList.map(conta => {
          return <h1>{conta.nome}</h1>
        })}
      </div>
    </div>
  );
}

export default App;
