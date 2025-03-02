//import { useState } from "react";
import ToDoData from "../data/ToDoData.json";
import ToDoCard from "./ToDoCard";

export default function HomePage() {
  //const [count, setCount] = useState(0);
  return (
    <>
      <div>
        {ToDoData.map((item) => (
          <ToDoCard
            key={item.id}
            id={item.id}
            name={item.name}
            status={item.status}
          />
        ))}
      </div>
      {/* <button onClick={() => setCount(count + 1)}>Click for increment</button>
      <h2>{count}</h2> */}
    </>
  );
}
