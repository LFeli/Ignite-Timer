import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'

export function Home() {
  return (
    <main className="bg-red-500 flex flex-col flex-1 items-center justify-center">
      <div className="w-full max-w-2xl">
        <form className="flex flex-col items-center gap-14">
          <p>Form</p>
          <p>Clock</p>
          <Button className="w-full flex-1 py-3 md:py-4 bg-green-500 hover:bg-green-700 disabled:bg-green-500 text-gray-100">
            <Play size={24} />
            Começar
          </Button>
        </form>
      </div>
    </main>
  )
}
