import { CyclesContext } from '@/context/CyclesContext'
import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect } from 'react'

export function Countdown() {
  const {
    activeCycle,
    activeCycleID,
    amountSecondsPassed,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

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

  useEffect(() => {
    let interval: number | NodeJS.Timeout

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()
          setSecondsPassed(totalSeconds)

          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleID,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  ])

  return (
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
  )
}
