import { createContext, useState } from 'react'
import { CycleForm } from '@/components/CycleForm'
import { Countdown } from '@/components/Countdown'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Play, X } from 'lucide-react'

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesContextType {
  activeCycle: Cycle | undefined
  activeCycleID: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
}

export const CyclesContext = createContext({} as CyclesContextType)

const newCycleFormSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo mínimo precisa ser de pelo menos 5 minutos')
    .max(60, 'O intervalo precisa ser de no máximo 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormSchema>

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleID, setActiveCycleID] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleID)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })
  const { handleSubmit, watch, reset } = newCycleForm

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleID) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleID(id)
    setAmountSecondsPassed(0)

    reset()
  }

  function handleInterruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleID) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )

    setActiveCycleID(null)
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <main className=" flex flex-col flex-1 items-center justify-center">
      <div className="w-full max-w-2xl">
        <form
          onSubmit={handleSubmit(handleCreateNewCycle)}
          className="flex flex-col items-center gap-14"
        >
          <CyclesContext.Provider
            value={{
              activeCycle,
              activeCycleID,
              amountSecondsPassed,
              markCurrentCycleAsFinished,
              setSecondsPassed,
            }}
          >
            <FormProvider {...newCycleForm}>
              <CycleForm />
            </FormProvider>
            <Countdown />
          </CyclesContext.Provider>

          {activeCycle ? (
            <Button
              className="w-full flex-1 gap-2 py-3 md:py-4 bg-red-500 hover:bg-red-700 text-gray-100"
              type="button"
              onClick={handleInterruptCycle}
            >
              <X size={24} />
              Interromper
            </Button>
          ) : (
            <Button
              className="w-full flex-1 gap-1 py-3 md:py-4 bg-green-500 hover:bg-green-700 disabled:bg-green-500 text-gray-100"
              type="submit"
              disabled={isSubmitDisabled}
            >
              <Play size={24} />
              Começar
            </Button>
          )}
        </form>
      </div>
    </main>
  )
}
