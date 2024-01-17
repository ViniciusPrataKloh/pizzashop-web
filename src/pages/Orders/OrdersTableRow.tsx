import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

export function OrdersTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Button variant="outline" className="">
          <Search className="h-3 w-3" />
          <span className="sr-only">Detalhes do pedido</span>
        </Button>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        156das864gfsd89a
      </TableCell>
      <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
      <TableCell className="my-3 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-slate-400"> </span>
        <span className="font-medium text-muted-foreground">Pendente</span>
      </TableCell>
      <TableCell className="font-medium">Vinícius Prata Klôh</TableCell>
      <TableCell className="font-medium">R$ 120,00</TableCell>
      <TableCell>
        <Button variant={'ghost'}>
          <ArrowRight className="mr-2 h-4 w-4" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant={'ghost'}>
          <X className="mr-2 h-4 w-4" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
