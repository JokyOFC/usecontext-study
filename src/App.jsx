import { useState } from "react";
import { createContext } from "react";
import "./App.css";
import Child from "./Child";

export const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Contador:</h1>

      <CountContext.Provider value={{ count, setCount }}>
        <Child />
      </CountContext.Provider>
    </div>
  );
}

export default App;
