import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'
import { useForm } from 'react-hook-form'

export function Home() {
  const { register, handleSubmit, watch } = useForm()

  const task = watch('task')
  const isSubmitDisabled = !task

  function handleCreateNewCycle(data) {
    console.log(data)
  }

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
                {...register('task')}
                className=" flex-1 w-full px-2 pb-2 bg-transparent text-gray-500 dark:text-gray-100 border-b-2 border-b-gray-500 placeholder:text-gray-500 focus:border-b-green-500 focus:outline-none"
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
                {...register('minutesAmount')}
                className="px-2 pb-2 bg-transparent text-gray-500 dark:text-gray-100 border-b-2 border-b-gray-500 placeholder:text-gray-500 focus:border-b-green-500 focus:outline-none"
              />

              <span>minutos</span>
            </div>
          </div>

          <div className="w-full flex items-center justify-between font-robotoMono text-4xl 2mb:text-8xl md:text-[8rem] leading-relaxed  text-gray-600 dark:text-gray-100 select-none">
            <div className="flex flex-1 gap-3 md:gap-4">
              <span className="w-full bg-gray-250 dark:bg-gray-700 py-6 sm:py-10 px-4 md:px-8 rounded-md text-center">
                0
              </span>
              <span className="w-full bg-gray-250 dark:bg-gray-700 py-6 sm:py-10 px-4 md:px-8 rounded-md text-center">
                0
              </span>
            </div>

            <span className="py-8 px-0 text-green-500 w-16 overflow-hidden flex justify-center -mt-2">
              :
            </span>

            <div className="flex flex-1 gap-3 md:gap-4">
              <span className="w-full bg-gray-250 dark:bg-gray-700 py-6 sm:py-10 px-4 md:px-8 rounded-md text-center">
                0
              </span>
              <span className="w-full bg-gray-250 dark:bg-gray-700 py-6 sm:py-10 px-4 md:px-8 rounded-md text-center">
                0
              </span>
            </div>
          </div>

          <Button
            className="w-full flex-1 py-3 md:py-4 bg-green-500 hover:bg-green-700 disabled:bg-green-500 text-gray-100"
            disabled={isSubmitDisabled}
          >
            <Play size={24} />
            Começar
          </Button>
        </form>
      </div>
    </main>
  )
}
