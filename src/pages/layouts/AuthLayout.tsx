import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <>
      <h1>Sign-In</h1>

      <Outlet />
    </>
  )
}