import { useEffect, useState } from "react"
import { ping, sort } from "./api"

function App() {
  const [message, setMessage] = useState("")
  const [solution, setSolution] = useState(null)
  useEffect(() => {
    ping().then(data => setMessage(data.message))
  }, [])

  const handleSort = (algorithm) => {
    sort(algorithm, [5, 3, 8, 4, 2]).then(data => {
      console.log(data)
      setSolution(data)
    })
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Algorithm Visualizer</h1>
      <p>Backend says: {message}</p>
      <div>
        <button onClick={() => handleSort("bubble")}>Sort</button>
        <button onClick={() => handleSort("bubble-smart")}>Sort Smart</button>
        <p>Solution: {JSON.stringify(solution)}</p>
      </div>
    </div>
  )
}

export default App