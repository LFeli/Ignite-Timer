import { Button } from '@/components/ui/button'
import { Play, X } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'

const newCycleFormSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1, 'O ciclo mínimo precisa ser de pelo menos 5 minutos')
    .max(60, 'O intervalo precisa ser de no máximo 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormSchema>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleID, setActiveCycleID] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleID)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number | NodeJS.Timeout

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifference >= totalSeconds) {
          setCycles((state) =>
            state.map((cycle) => {
              if (cycle.id === activeCycleID) {
                return { ...cycle, finishedDate: new Date() }
              } else {
                return cycle
              }
            }),
          )

          setAmountSecondsPassed(totalSeconds)

          clearInterval(interval)
        } else {
          setAmountSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, activeCycleID])

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

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    } else {
      document.title = 'Ignite Timer'
    }
  }, [minutes, seconds, activeCycle])

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <main className=" flex flex-col flex-1 items-center justify-center">
      <div className="w-full max-w-2xl">
        <form
          onSubmit={handleSubmit(handleCreateNewCycle)}
          className="flex flex-col items-center gap-14"
        >
          <div className="w-full flex flex-col md:flex-row gap-10 md:gap-6 font-bold md:text-lg">
            <div className="flex md:flex-1 gap-2">
              <label htmlFor="task">Vou trabalhar em</label>
              <input
                type="text"
                id="task"
                placeholder="Dê um nome ao seu projeto"
                disabled={!!activeCycle}
                {...register('task')}
                className=" flex-1 w-full px-2 pb-2 bg-transparent text-gray-500 dark:text-gray-100 border-b-2 border-b-gray-500 placeholder:text-gray-500 focus:border-b-green-500 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <div className="flex gap-2">
              <label htmlFor="minutesAmount">Durante</label>
              <input
                type="number"
                step={5}
                min={1}
                max={60}
                id="minutesAmount"
                placeholder="00"
                disabled={!!activeCycle}
                {...register('minutesAmount', { valueAsNumber: true })}
                className="px-2 pb-2 bg-transparent text-gray-500 dark:text-gray-100 border-b-2 border-b-gray-500 placeholder:text-gray-500 focus:border-b-green-500 focus:outline-none disabled:opacity-50 cursor-not-allowed"
              />

              <span>minutos</span>
            </div>
          </div>

          <div className="w-full flex items-center justify-between font-robotoMono text-4xl 2mb:text-8xl md:text-[8rem] leading-relaxed  text-gray-600 dark:text-gray-100 select-none">
            <div className="flex flex-1 gap-3 md:gap-4">
              <span className="w-full bg-gray-250 dark:bg-gray-700 py-6 sm:py-10 px-4 md:px-8 rounded-md text-center">
                {minutes[0]}
              </span>
              <span className="w-full bg-gray-250 dark:bg-gray-700 py-6 sm:py-10 px-4 md:px-8 rounded-md text-center">
                {minutes[1]}
              </span>
            </div>

            <span className="py-8 px-0 text-green-500 w-16 overflow-hidden flex justify-center -mt-2">
              :
            </span>

            <div className="flex flex-1 gap-3 md:gap-4">
              <span className="w-full bg-gray-250 dark:bg-gray-700 py-6 sm:py-10 px-4 md:px-8 rounded-md text-center">
                {seconds[0]}
              </span>
              <span className="w-full bg-gray-250 dark:bg-gray-700 py-6 sm:py-10 px-4 md:px-8 rounded-md text-center">
                {seconds[1]}
              </span>
            </div>
          </div>

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
