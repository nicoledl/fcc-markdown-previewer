import CodeBox from "./components/CodeBox";
import RenderBox from "./components/RenderBox";
import "./scss/App.scss"

function App() {
  return (
    <div className="App container d-grid justify-content-center mt-3">
      <CodeBox />
      <RenderBox />
      <p className="mt-2">By Nicole D. Losana</p>
    </div>
  );
}

export default App;
