import { useContext } from "react";

import { CountContext } from "./App";
import Child2 from "./Child2";

const Child = () => {
  const { count } = useContext(CountContext);

  return (
    <div>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "row",
          gap: "135px",
        }}
      >
        <h1>{count.count1}</h1>
        <h1>{count.count2}</h1>
      </div>
      <Child2 />
    </div>
  );
};

export default Child;
