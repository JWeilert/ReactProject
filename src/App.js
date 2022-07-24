import logo from "./logo.svg";
import "./App.css";
import Circle from "./Content/Circle";

function App() {
  const state = {
    size: 250,
    progress: 40,
    strokeWidth: 15,
    circleOneColor: "red",
    circleTwoColor: "blue",
  };
  return (
    <div className="App">
      <h1>Circle</h1>
      <Circle {...state} />
    </div>
  );
}

export default App;
