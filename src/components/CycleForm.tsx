import { CyclesContext } from '@/context/CyclesContext'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

export function CycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

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
          min={5}
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
