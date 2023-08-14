import logo from './logo.svg';
import './App.css';

function App() {
  if(1==1) return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );

  if(1==2) return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. - Yes I edited!!!.... :-)
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
