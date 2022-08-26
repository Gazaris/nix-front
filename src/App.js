import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Catalog from './components/Catalog'
import FeedbackForm from './components/FeedbackForm'
import Footer from './components/Footer'

const App = () => {
  return (
    <div id="app">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Catalog />} />
      </Routes>
      <FeedbackForm />
      <Footer />
    </div>
  )
}

export default App
