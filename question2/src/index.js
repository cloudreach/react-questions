import React from "react"
import ReactDOM from "react-dom"

import Filter from "./Filter"

ReactDOM.render(
  <div className="app">
    <h1>Filter Control</h1>
    <Filter
      data={['foo', 'bar']}
      onFilter={(filtered) => console.log(filtered)}/>
  </div>,
  document.getElementById("root")
);
