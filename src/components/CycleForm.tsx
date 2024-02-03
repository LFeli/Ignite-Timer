import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const newCycleFormSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1, 'O ciclo mínimo precisa ser de pelo menos 5 minutos')
    .max(60, 'O intervalo precisa ser de no máximo 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormSchema>

export function CycleForm() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  return (
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
  )
}
