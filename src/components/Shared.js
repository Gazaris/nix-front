import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'
import FeedbackForm from './FeedbackForm'
import Footer from './Footer'

const Shared = () => {
  return (
    <div id="app">
      <Header />
      <Navbar />

      <Outlet />

      <FeedbackForm />
      <Footer />
    </div>
  )
}

export default Shared
