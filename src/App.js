import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Hien Tran';
  const age = 18;
  const isMale = true;
  const student = {
    name: 'Hien Tran'
  };
  const colorList = ['red', 'green', 'blue']

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hien Tran
        </p>

        <p>Xin chao {name} - {age} - {isMale ? 'Male' : 'Female'}</p>

        {isMale ? <p>Male</p> : <p>Female</p>}

        {isMale && <p>Male</p>}

        {!isMale && <p>Female</p>}

        {isMale && (
          <div>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </div>
        )}

        {isMale && (
          <React.Fragment>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </React.Fragment>
        )}

        {isMale && (
          <>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </>
        )}

        <p>{student.name}</p>

        <ul>
          {colorList.map(color => (
            <li style={{ color }}>{color}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
