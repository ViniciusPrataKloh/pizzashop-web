import SignIn from "@/pages/auth/SignIn";
import Dashboard from "@/pages/home/Dashboard";
import { Route, Routes } from "react-router-dom";
import { DashboardLayout } from "./pages/layouts/DashboardLayout";
import { AuthLayout } from "./pages/layouts/AuthLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="" element={<Dashboard />} />
      </Route>

      <Route path="/sign-in" element={<AuthLayout />}>
        <Route path="" element={<SignIn />} />
      </Route>
    </Routes>
  )
}