import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Post from './index.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Post />


  </StrictMode>,
)
