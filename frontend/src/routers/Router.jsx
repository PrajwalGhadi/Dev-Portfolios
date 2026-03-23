import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from '../pages/landing/Landing'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  )
}

export default Router