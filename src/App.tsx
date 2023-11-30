import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CircleWater from "./components/circle_water/CircleWater";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-amber-500">
        <CircleWater
          url={""}
          size={0}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        ></CircleWater>
      </h1>
    </div>
  );
}

export default App;
