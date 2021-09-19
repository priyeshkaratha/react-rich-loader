import Stories from "./components/Stories";
import User from "./components/User";


function App() {
  return (
    <div className="App">
      <header>
        <h1>React Component Rich Loader</h1>
      </header>
      <div className="content">
        <Stories>

        </Stories>
        <User></User>
      </div>
    </div>
  );
}

export default App;
