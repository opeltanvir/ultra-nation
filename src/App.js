import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data=>{
      setCountries(data);
      console.log(data);
      const names = data.map(country => country.name)
      console.log(names);
    })
    .catch(error=> console.log(error))
  },[])
  return (
    <div className="App">
      <h1>country loaded: {countries.length}</h1>
      <ul>
        {
          countries.map(country => <li>{country.name}</li>)
        }
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
