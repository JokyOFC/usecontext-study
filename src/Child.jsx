import { useContext } from "react";

import { CountContext } from "./App";
import Child2 from "./Child2";

const Child = () => {
  const { count } = useContext(CountContext);

  return (
    <div>
      <h1>{count}</h1>
      <Child2 />
    </div>
  );
};

export default Child;
