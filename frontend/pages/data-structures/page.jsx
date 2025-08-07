import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DataStructuresPage from '../../src/components/DataStructuresPage/DataStructuresPage.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <DataStructuresPage />
    </StrictMode>
) 