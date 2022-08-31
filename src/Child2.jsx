import { useContext } from "react";

import { CountContext } from "./App";

const Child2 = () => {
  const { setCount } = useContext(CountContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "50px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <p>Count 1</p>
        <button
          onClick={() => {
            setCount({
              type: "INCREMENT1",
              payload: 5,
            });
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            setCount({
              type: "DECREMENT1",
              payload: 5,
            });
          }}
        >
          remove
        </button>
      </div>
      <div>
        <p>Count 2</p>
        <button
          onClick={() => {
            setCount({
              type: "INCREMENT2",
              payload: 1,
            });
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            setCount({
              type: "DECREMENT2",
              payload: 1,
            });
          }}
        >
          remove
        </button>
      </div>
    </div>
  );
};

export default Child2;
