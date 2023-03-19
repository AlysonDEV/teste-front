import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './global.scss'
import { NewRoutes } from './Routes'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <NewRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
