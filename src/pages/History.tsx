import { Status } from '@/components/Status'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { CyclesContext } from '@/context/CyclesContext'
import { useContext } from 'react'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <main className="flex flex-1 flex-col gap-8">
      <h1 className="text-lg md:text-2xl dark:text-gray-100 font-bold pt-10">
        Meu histórico
      </h1>

      <pre>{JSON.stringify(cycles, null, 2)}</pre>

      <Table className="overflow-hidden flex-1">
        <TableHeader>
          <TableRow className="bg-gray-200 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600">
            <TableHead>Tarefas</TableHead>
            <TableHead>Duração</TableHead>
            <TableHead>Início</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="min-w-52">
              Conserto de débitos técnicos
            </TableCell>
            <TableCell>25 minutos</TableCell>
            <TableCell>Há cerca de 2 meses</TableCell>
            <TableCell>
              <Status statusColor="completed">Completado</Status>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="min-w-52">
              Conserto de débitos técnicos
            </TableCell>
            <TableCell>25 minutos</TableCell>
            <TableCell>Há cerca de 2 meses</TableCell>
            <TableCell>
              <Status statusColor="inProgress">Completado</Status>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="min-w-52">
              Conserto de débitos técnicos
            </TableCell>
            <TableCell>25 minutos</TableCell>
            <TableCell>Há cerca de 2 meses</TableCell>
            <TableCell>
              <Status statusColor="completed">Completado</Status>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="min-w-52">
              Conserto de débitos técnicos
            </TableCell>
            <TableCell>25 minutos</TableCell>
            <TableCell>Há cerca de 2 meses</TableCell>
            <TableCell>
              <Status statusColor="suspended">Completado</Status>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="min-w-52">
              Conserto de débitos técnicos
            </TableCell>
            <TableCell>25 minutos</TableCell>
            <TableCell>Há cerca de 2 meses</TableCell>
            <TableCell>
              <Status statusColor="completed">Completado</Status>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="min-w-52">
              Conserto de débitos técnicos
            </TableCell>
            <TableCell>25 minutos</TableCell>
            <TableCell>Há cerca de 2 meses</TableCell>
            <TableCell>
              <Status statusColor="completed">Completado</Status>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="min-w-52">
              Conserto de débitos técnicos
            </TableCell>
            <TableCell>25 minutos</TableCell>
            <TableCell>Há cerca de 2 meses</TableCell>
            <TableCell>
              <Status statusColor="completed">Completado</Status>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="min-w-52">
              Conserto de débitos técnicos
            </TableCell>
            <TableCell>25 minutos</TableCell>
            <TableCell>Há cerca de 2 meses</TableCell>
            <TableCell>
              <Status statusColor="completed">Completado</Status>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="min-w-52">
              Conserto de débitos técnicos
            </TableCell>
            <TableCell>25 minutos</TableCell>
            <TableCell>Há cerca de 2 meses</TableCell>
            <TableCell>
              <Status statusColor="completed">Completado</Status>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="min-w-52">
              Conserto de débitos técnicos
            </TableCell>
            <TableCell>25 minutos</TableCell>
            <TableCell>Há cerca de 2 meses</TableCell>
            <TableCell>
              <Status statusColor="completed">Completado</Status>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="min-w-52">
              Conserto de débitos técnicos
            </TableCell>
            <TableCell>25 minutos</TableCell>
            <TableCell>Há cerca de 2 meses</TableCell>
            <TableCell>
              <Status statusColor="completed">Completado</Status>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="min-w-52">
              Conserto de débitos técnicos
            </TableCell>
            <TableCell>25 minutos</TableCell>
            <TableCell>Há cerca de 2 meses</TableCell>
            <TableCell>
              <Status statusColor="completed">Completado</Status>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="min-w-52">
              Conserto de débitos técnicos
            </TableCell>
            <TableCell>25 minutos</TableCell>
            <TableCell>Há cerca de 2 meses</TableCell>
            <TableCell>
              <Status statusColor="completed">Completado</Status>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="min-w-52">
              Conserto de débitos técnicos
            </TableCell>
            <TableCell>25 minutos</TableCell>
            <TableCell>Há cerca de 2 meses</TableCell>
            <TableCell>
              <Status statusColor="completed">Completado</Status>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="min-w-52">
              Conserto de débitos técnicos
            </TableCell>
            <TableCell>25 minutos</TableCell>
            <TableCell>Há cerca de 2 meses</TableCell>
            <TableCell>
              <Status statusColor="completed">Completado</Status>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="min-w-52">
              Conserto de débitos técnicos
            </TableCell>
            <TableCell>25 minutos</TableCell>
            <TableCell>Há cerca de 2 meses</TableCell>
            <TableCell>
              <Status statusColor="completed">Completado</Status>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="min-w-52">
              Conserto de débitos técnicos
            </TableCell>
            <TableCell>25 minutos</TableCell>
            <TableCell>Há cerca de 2 meses</TableCell>
            <TableCell>
              <Status statusColor="completed">Completado</Status>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="min-w-52">
              Conserto de débitos técnicos
            </TableCell>
            <TableCell>25 minutos</TableCell>
            <TableCell>Há cerca de 2 meses</TableCell>
            <TableCell>
              <Status statusColor="completed">Completado</Status>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="min-w-52">
              Conserto de débitos técnicos
            </TableCell>
            <TableCell>25 minutos</TableCell>
            <TableCell>Há cerca de 2 meses</TableCell>
            <TableCell>
              <Status statusColor="completed">Completado</Status>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="min-w-52">
              Conserto de débitos técnicos
            </TableCell>
            <TableCell>25 minutos</TableCell>
            <TableCell>Há cerca de 2 meses</TableCell>
            <TableCell>
              <Status statusColor="completed">Completado</Status>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="min-w-52">
              Conserto de débitos técnicos
            </TableCell>
            <TableCell>25 minutos</TableCell>
            <TableCell>Há cerca de 2 meses</TableCell>
            <TableCell>
              <Status statusColor="completed">Completado</Status>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="min-w-52">
              Conserto de débitos técnicos
            </TableCell>
            <TableCell>25 minutos</TableCell>
            <TableCell>Há cerca de 2 meses</TableCell>
            <TableCell>
              <Status statusColor="completed">Completado</Status>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  )
}
