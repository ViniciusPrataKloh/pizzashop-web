import { Building, ChevronDown, LogOut } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          variant={'outline'}
          className="flex select-none items-center gap-2"
        >
          Pizza Shop
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col items-center">
          <strong>Vinícius Prata Klôh</strong>
          <p className="text-xs font-normal text-muted-foreground">
            vinicius.prata.kloh@gmail.com
          </p>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Building className="mr-2 h-4 w-4" />
          Perfil da loja
        </DropdownMenuItem>

        <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
          <Link to="/auth/sign-in" className="flex w-full items-center">
            <LogOut className="mr-2 h-4 w-4" />
            Sair
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
