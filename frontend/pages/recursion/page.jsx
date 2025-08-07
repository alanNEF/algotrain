import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RecursionPage from '../../src/components/RecursionPage/RecursionPage.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RecursionPage />
    </StrictMode>
) 