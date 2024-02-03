import { differenceInSeconds } from 'date-fns'
import { useEffect, useState } from 'react'

export function Countdown() {
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

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
