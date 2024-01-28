import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'

export function Home() {
  return (
    <main className=" flex flex-col flex-1 items-center justify-center">
      <div className="w-full max-w-2xl">
        <form className="flex flex-col items-center gap-14">
          <p>Form</p>

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

          <Button className="w-full flex-1 py-3 md:py-4 bg-green-500 hover:bg-green-700 disabled:bg-green-500 text-gray-100">
            <Play size={24} />
            Começar
          </Button>
        </form>
      </div>
    </main>
  )
}
