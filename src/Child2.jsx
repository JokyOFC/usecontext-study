import { useContext } from "react";

import { CountContext } from "./App";

const Child2 = () => {
  const { setCount } = useContext(CountContext);

  return (
    <div>
      <button
        onClick={() => {
          setCount((previousState) => {
            return previousState + 1;
          });
        }}
      >
        {" "}
        Add
      </button>
    </div>
  );
};

export default Child2;
