import { Outlet } from 'react-router-dom'

export function DashboardLayout() {
  return (
    <>
      <h1>Cabeçalho</h1>

      <Outlet />
    </>
  )
}