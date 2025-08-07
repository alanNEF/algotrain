import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import LandingPage from "./components/LandingPage/LandingPage"
import SortingPage from "./components/sortingPage/sortingPage"
import SearchingPage from "./components/SearchingPage/SearchingPage"
import DataStructuresPage from "./components/DataStructuresPage/DataStructuresPage"
import HashingPage from "./components/HashingPage/HashingPage"
import RecursionPage from "./components/RecursionPage/RecursionPage"
import DynamicProgrammingPage from "./components/DynamicProgrammingPage/DynamicProgrammingPage"
import GreedyPage from "./components/GreedyPage/GreedyPage"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sorting" element={<SortingPage />} />
          <Route path="/searching" element={<SearchingPage />} />
          <Route path="/data-structures" element={<DataStructuresPage />} />
          <Route path="/hashing" element={<HashingPage />} />
          <Route path="/recursion" element={<RecursionPage />} />
          <Route path="/dynamic-programming" element={<DynamicProgrammingPage />} />
          <Route path="/greedy" element={<GreedyPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App