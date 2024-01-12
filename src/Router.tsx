import { Route, Routes } from 'react-router-dom'

import SignIn from '@/pages/auth/SignIn'
import Dashboard from '@/pages/home/Dashboard'

import SignUp from './pages/auth/SignUp'
import { AuthLayout } from './pages/layouts/AuthLayout'
import { DashboardLayout } from './pages/layouts/DashboardLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="" element={<Dashboard />} />
      </Route>

      <Route path="/auth/" element={<AuthLayout />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  )
}
