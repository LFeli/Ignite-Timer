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
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <main className="flex flex-1 flex-col gap-8">
      <h1 className="text-lg md:text-2xl dark:text-gray-100 font-bold pt-10">
        Meu histórico
      </h1>

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
          {cycles.map((cycle) => {
            return (
              <TableRow key={cycle.id}>
                <TableCell className="min-w-52">{cycle.task}</TableCell>
                <TableCell>{cycle.minutesAmount} minutos</TableCell>
                <TableCell>
                  {formatDistanceToNow(cycle.startDate, {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </TableCell>
                <TableCell>
                  {cycle.finishedDate && (
                    <Status statusColor="completed">Completado</Status>
                  )}

                  {cycle.interruptedDate && (
                    <Status statusColor="suspended">Interrompido</Status>
                  )}

                  {!cycle.finishedDate && !cycle.interruptedDate && (
                    <Status statusColor="inProgress">Em progresso</Status>
                  )}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </main>
  )
}
