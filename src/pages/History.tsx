import { Table as HistoryTable } from '@/components/Table'

export function History() {
  return (
    <main className="bg-red-500 flex flex-1 flex-col gap-8">
      <h1 className="text-lg md:text-2xl dark:text-gray-100 font-bold pt-10">
        Meu histórico
      </h1>

      <HistoryTable />
    </main>
  )
}
