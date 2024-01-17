import { Home, Moon, Pizza, SunMedium, UtensilsCrossed } from 'lucide-react'
import { useState } from 'react'

import { useTheme } from '../theme/ThemeProvider'
import { Separator } from '../ui/separator'
import { Switch } from '../ui/switch'
import { AccountMenu } from './AccountMenu'
import { NavLink } from './NavLink'

export function Header() {
  const { setTheme, theme } = useTheme()
  const [darkModeSelected, setDarkModeSelected] = useState<boolean>(
    theme !== 'light',
  )

  console.log(theme)

  function handleChangeToggle() {
    theme === 'light' ? setTheme('dark') : setTheme('light')
    setDarkModeSelected(!darkModeSelected)
  }

  return (
    <div className="border-b">
      <div className="item-center flex h-16 gap-6 px-6 py-5">
        <Pizza className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="h-4 w-4" />
            Início
          </NavLink>

          <NavLink to="/orders">
            <UtensilsCrossed className="h-4 w-4" />
            Pedidos
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <div className="flex items-center gap-1">
            <SunMedium className="h-5 w-5" />
            <Switch
              onCheckedChange={handleChangeToggle}
              checked={darkModeSelected}
            />
            <Moon className="h-5 w-5" />
          </div>

          {/* <ThemeToggle /> */}

          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
