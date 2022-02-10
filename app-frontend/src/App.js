import logo from './logo.svg';
import './App.css';

function App() {

  (async ()=>{

    let response = await fetch('http://0.0.0.0:8000/api/posts')
    if (response.ok) {
      let {data: posts} = await response.json();
      console.log(posts)
    }
  })()

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
    </div>
  );
}

export default App;
