//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>
      <ul>
        <li>Test 1</li>
        <li>Test 2</li>
        <li>Test 3</li>
      </ul>
    </h1>
  </div>,
  document.getElementById("root")
);
