import * as React from "react"

interface CounterState {
  count: number
}

const Counter = () => {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      <h1>Counter</h1>
      <p>current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>plus</button>
      <button onClick={() => setCount(count - 1)}>minus</button>
    </div>
  )
}

export default Counter
