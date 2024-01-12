import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="border-foreground/5 bg-muted text-muted-foreground flex flex-col justify-between border-r p-10">
        <div className="text-foreground flex items-center gap-3 text-lg">
          <Pizza className="h-5 w-5" />
          pizza.shop
        </div>

        <footer className="text-sm">
          Painel do parceiro &copy; pizza.shop - {new Date().getFullYear()}{' '}
        </footer>
      </div>

      <Outlet />
    </div>
  )
}
