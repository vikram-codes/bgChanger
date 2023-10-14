import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("green");

  return (
    <div
      className="w-full h-screen
       duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <div
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => setColor("red")}
            style={{ backgroundColor: "red" }}
          >
            Red
          </div>
          <div
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => setColor("green")}
            style={{ backgroundColor: "green" }}
          >
            Green
          </div>
          <div
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => setColor("blue")}
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </div>
          <div
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => setColor("orange")}
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </div>
          <div
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            onClick={() => setColor("yellow")}
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </div>
          <div
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            onClick={() => setColor("pink")}
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
