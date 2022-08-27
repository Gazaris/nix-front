import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import ToTop from './components/ToTop.js'
import App from './App.js'
import './index.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <Router>
    <ToTop/>
    <App/>
  </Router>
)
