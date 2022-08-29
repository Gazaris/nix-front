import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Shared from './components/Shared'
import Catalog from './components/Catalog'
import Product from './components/Product'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Shared />}>
        <Route index element={<Catalog />} />
        <Route path="item/:id" element={<Product />} />
      </Route>
    </Routes>
  )
}

export default App
