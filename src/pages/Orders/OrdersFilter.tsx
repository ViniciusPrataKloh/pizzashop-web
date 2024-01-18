import { Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function OrdersFilter() {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros:</span>

      <Input placeholder="ID do pedido" className="h-8 w-auto" />

      <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />

      <Select>
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue
            placeholder="Selecione o status"
            className="placeholder:text-red"
          />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="All">Todos os status</SelectItem>
          <SelectItem value="pending">Pendente</SelectItem>
          <SelectItem value="canceled">Cancelado</SelectItem>
          <SelectItem value="processing">Em preparo</SelectItem>
          <SelectItem value="delivering">Em entrega</SelectItem>
          <SelectItem value="delivered">Entregue</SelectItem>
        </SelectContent>
      </Select>

      <Button type="submit" variant="secondary">
        <Search className="mr-2 h-3 w-3" />
        Filtras resultados
      </Button>

      <Button type="button" variant="outline">
        <X className="mr-2 h-3 w-3" />
        Remover filtros
      </Button>
    </form>
  )
}
