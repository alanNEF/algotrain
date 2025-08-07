import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HashingPage from '../../src/components/HashingPage/HashingPage.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HashingPage />
    </StrictMode>
) 