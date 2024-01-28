import { Timer, History } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import IgniteLogo from '../assets/igniteLogo.svg'
import { ModeToggle } from './ModeToggle'
import {
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardTrigger,
} from './ui/hover-card'

export function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-8">
          <img src={IgniteLogo} alt="" />
          <ModeToggle />
        </div>

        <div className="flex items-center justify-center gap-3 text-gray-500">
          <HoverCard openDelay={600} closeDelay={150}>
            <HoverCardTrigger>
              {' '}
              <NavLink
                to="/"
                className="w-12 h-12 flex items-center justify-center border-b-[3px] border-t-[3px] border-transparent rounded-t hover:border-b-green-500 hover:bg-zinc-800 transition-colors duration-150 aria-[current='page']:border-b-green-500 aria-[current='page']:text-green-500"
              >
                <Timer size={28} />
              </NavLink>
            </HoverCardTrigger>
            <HoverCardContent
              side="top"
              sideOffset={15}
              className="bg-zinc-950 text-gray-200 text border-none"
            >
              Timer
              <HoverCardArrow className="fill-zinc-950" />
            </HoverCardContent>
          </HoverCard>

          <HoverCard openDelay={600} closeDelay={150}>
            <HoverCardTrigger>
              {' '}
              <NavLink
                to="/history"
                className="w-12 h-12 flex items-center justify-center border-b-[3px] border-t-[3px] border-transparent rounded-t hover:border-b-green-500 hover:bg-zinc-800 transition-colors duration-150 aria-[current='page']:border-b-green-500 aria-[current='page']:text-green-500"
              >
                <History size={28} />
              </NavLink>
            </HoverCardTrigger>
            <HoverCardContent
              side="top"
              sideOffset={15}
              className="bg-zinc-950 text-gray-200 text border-none"
            >
              Histórico
              <HoverCardArrow className="fill-zinc-950" />
            </HoverCardContent>
          </HoverCard>
        </div>
      </nav>
    </header>
  )
}
