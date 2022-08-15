import React, { Component } from "react"

export default class ClassComponent extends Component {
  //props
  //setting state
  constructor(props) {
    super(props)

    this.state = {
      count: props.count,
      coffee: [],
    }
  }

  //useEffect
  componentDidMount() {
    //link useEffect
    console.log("Component did mount")
    let url = "https://api.sampleapis.com/coffee/hot"
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          count: this.state.count,
          coffee: data,
        })
      )
      .catch()
  }

  //the return
  render() {
    return (
      <>
        <h1>This is a class component {this.state.count}</h1>
        <button
          onClick={() => {
            // update the count to count + 1
            this.setState({
              count: this.state.count + 1,
              coffee: this.state.coffee,
            })
          }}
        >
          Add One
        </button>

        {/* map through coffee */}

        {this.state.coffee.map((coffee) => (
          <h1 key={coffee.id}>{coffee.title}</h1>
        ))}
      </>
    )
  }
}
