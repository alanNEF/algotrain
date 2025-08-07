import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SortingPage from '../../src/pages/sorting/sortingPage/sortingPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SortingPage />
  </StrictMode>
)
