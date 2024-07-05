import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ModalState } from './context/Modal'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ModalState>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ModalState>
)
