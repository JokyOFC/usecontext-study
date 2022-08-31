import { createContext, useReducer } from "react";
import "./App.css";
import Child from "./Child";

export const CountContext = createContext();

function App() {
  const countReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT1":
        return {
          ...state,
          count1: state.count1 + action.payload,
        };
      case "INCREMENT2":
        return {
          ...state,
          count2: state.count2 + action.payload,
        };
      case "DECREMENT1":
        if (state.count1 <= 0) {
          return { ...state, count1: (state.count1 = 0) };
        } else {
          return { ...state, count1: state.count1 - action.payload };
        }
      case "DECREMENT2":
        if (state.count2 <= 0) {
          return { ...state, count2: (state.count2 = 0) };
        } else {
          return { ...state, count2: state.count2 - action.payload };
        }
      default:
        return state;
    }
  };

  const countInitialValue = {
    count1: 0,
    count2: 0,
  };

  const [count, setCount] = useReducer(countReducer, countInitialValue);

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
