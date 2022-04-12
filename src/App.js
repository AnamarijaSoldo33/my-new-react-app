import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        {" "}
        <Weather defaultCity="New York" />
        <footer>
          <a
            href="https://github.com/AnamarijaSoldo33/my-new-react-app"
            alt="_target"
          >
            Open sourced code
          </a>{" "}
          by Anamarija Soldo
        </footer>
      </div>
    </div>
  );
}

export default App;
