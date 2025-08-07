import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SearchingPage from '../../src/components/SearchingPage/SearchingPage.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <SearchingPage />
    </StrictMode>
) 