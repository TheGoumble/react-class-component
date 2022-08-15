import React, { Component } from "react"
import "./App.css"
import FunctionalComponents from "./FunctionalComponent"
import ClassComponent from "./ClassComponent"

let count = 1 
class App extends Component {
  render() {
    return (
      <>
        <h1>Component go here</h1>
        <FunctionalComponents passCount = {count}/>
        <ClassComponent count = {count} />
      </>
    )
  }
}

export default App
