import SignIn from "@/pages/auth/SignIn";
import Dashboard from "@/pages/home/Dashboard";
import { Route, Routes } from "react-router-dom";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  )
}