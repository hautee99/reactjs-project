import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CircleAvatar from "./components/circle_avatar/CircleAvatar";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-amber-500">
        <CircleAvatar
          url={""}
          size={0}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        ></CircleAvatar>
      </h1>
    </div>
  );
}

export default App;
