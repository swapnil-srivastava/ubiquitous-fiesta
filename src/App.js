import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [response, setResponse] = useState('');

  const apiCall = () => {
    // Make a request for a user with a given ID
    axios.get('/api/Message')
      .then(function (response) {
        // handle success
        console.log(response);
        console.log(response.data);
        setResponse(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  return (
    <div className="App">
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
      <p>{response}</p>
      <button type="button" onClick={apiCall}>API Call</button>
      
    </div>
  );
}

export default App;
