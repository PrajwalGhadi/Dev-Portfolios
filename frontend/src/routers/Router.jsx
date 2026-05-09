import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from '../pages/landing/Landing'
import SignIn from '../pages/auth/SignIn'
import SignUp from '../pages/auth/SignUp'
import Dashboard from '../pages/dashboard/Dashboard'


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth/signin" element={<SignIn />} />
      <Route path="/auth/signup" element={<SignUp />} />

      {/* User Dashboard Routes */}
      <Route path ="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default Router