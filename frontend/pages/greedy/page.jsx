import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GreedyPage from '../../src/components/GreedyPage/GreedyPage.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GreedyPage />
    </StrictMode>
) 