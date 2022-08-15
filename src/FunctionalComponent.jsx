import React, { useState, useEffect } from "react"

export default function FunctionalComponents({ passCount }) {
  const [getCount, setCount] = useState(passCount)
  const [getCoffee, setCoffee] = useState([])

  useEffect(() => {
    let url = "https://api.sampleapis.com/coffee/hot"
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        //do something
        setCoffee(data)
      })
  }, [])

  return (
    <>
      <h1>this is a functional component {getCount}</h1>

      <button
        onClick={() => {
          setCount(getCount + 1)
        }}
      >
        Add One but functionally
      </button>

        {getCoffee.map(getCoffee => <h1 key={getCoffee.id} >{getCoffee.title}</h1>)}

    </>
  )
}
