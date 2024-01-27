import { Play } from 'lucide-react'

export function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <form action="" className="flex flex-col items-center gap-14">
        <div className="w-full flex items-center justify-center gap-2 flex-wrap text-green-100 text-lg font-bold">
          <label htmlFor="task">Vou trabalhar em</label>
          <input
            type="text"
            id="task"
            placeholder="Dê um nome para o seu projeto"
            className="bg-transparent h-10 border-b-2 border-b-gray-500 font-bold text-lg px-2 text-gray-100 flex-1  placeholder:text-gray-500 focus:border-b-green-500 focus:outline-none"
          />

          <label htmlFor="minutesAmount">Durante</label>
          <input
            type="number"
            id="minutesAmount"
            placeholder="00"
            className="bg-transparent h-10 border-b-2 border-b-gray-500 font-bold text-lg px-2 text-gray-100 w-16 placeholder:text-gray-500 focus:outline-none focus:border-b-green-500"
          />

          <span>minutos</span>
        </div>

        <div className="font-robotoMono text-[10rem] leading-[8rem] text-gray-100 flex gap-4">
          <span className="bg-gray-700 py-8 px-4 rounded-md">0</span>
          <span className="bg-gray-700 py-8 px-4 rounded-md">0</span>

          <div className="py-8 px-0 text-green-500 w-16 overflow-hidden flex justify-center -mt-4">
            :
          </div>

          <span className="bg-gray-700 py-8 px-4 rounded-md">0</span>
          <span className="bg-gray-700 py-8 px-4 rounded-md">0</span>
        </div>

        <button
          type="submit"
          disabled
          className="w-full border-none p-4 rounded-lg flex items-center justify-center gap-2 cursor-pointer font-bold bg-green-500 text-gray-100 hover:bg-green-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-green-500"
        >
          <Play />
          Começar
        </button>
      </form>
    </main>
  )
}
