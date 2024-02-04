import { useContext } from 'react'
import { CycleForm } from '@/components/CycleForm'
import { Countdown } from '@/components/Countdown'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Play, X } from 'lucide-react'
import { CyclesContext } from '@/context/CyclesContext'

const newCycleFormSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo mínimo precisa ser de pelo menos 5 minutos')
    .max(60, 'O intervalo precisa ser de no máximo 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormSchema>

export function Home() {
  const { activeCycle, createNewCycle, InterruptCurrentCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })
  const { handleSubmit, watch /* reset */ } = newCycleForm

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <main className=" flex flex-col flex-1 items-center justify-center">
      <div className="w-full max-w-2xl">
        <form
          onSubmit={handleSubmit(createNewCycle)}
          className="flex flex-col items-center gap-14"
        >
          <FormProvider {...newCycleForm}>
            <CycleForm />
          </FormProvider>
          <Countdown />

          {activeCycle ? (
            <Button
              className="w-full flex-1 gap-2 py-3 md:py-4 bg-red-500 hover:bg-red-700 text-gray-100"
              type="button"
              onClick={InterruptCurrentCycle}
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
