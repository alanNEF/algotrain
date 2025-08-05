import { useEffect, useState } from "react"
import { ping } from "./api"

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    ping().then(data => setMessage(data.message))
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Algorithm Visualizer</h1>
      <p>Backend says: {message}</p>
    </div>
  )
}

export default App