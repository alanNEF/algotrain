import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DynamicProgrammingPage from '../../src/components/DynamicProgrammingPage/DynamicProgrammingPage.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <DynamicProgrammingPage />
    </StrictMode>
) 