import './App.css';
import {AuthProvider} from "./hooks/auth";
import {DirectusProvider} from "./hooks/directus";
import CostsChart from "./components/CostsChart";

function App() {

  return (
      <DirectusProvider>
          <AuthProvider>
              <div>
                  <h1>Data from Directus</h1>
                  <CostsChart projectid={1} />
              </div>
          </AuthProvider>
      </DirectusProvider>
  );
  /*return (
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
  );*/
}

export default App;
