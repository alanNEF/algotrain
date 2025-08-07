import React from 'react'
import { useState } from 'react'

export default function SortingPage() {
    const [array, setArray] = useState([5, 3, 8, 4, 2])
    const [algorithm, setAlgorithm] = useState('bubble')
    const [solution, setSolution] = useState(null)

    return <div>
        <h1>Sorting Visualizer</h1>
    </div>
}