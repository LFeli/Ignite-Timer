import { History, Timer } from 'lucide-react'
import igniteLogo from '../assets/igniteLogo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <img src={igniteLogo} alt="" />

      <nav className="flex items-center justify-center gap-3 text-gray-500 ">
        <NavLink
          to="/"
          title="Timer"
          className="w-12 h-12 flex items-center justify-center border-b-[3px] border-t-[3px] border-transparent rounded-t hover:border-b-green-500 hover:bg-zinc-800 transition-colors duration-150 aria-[current='page']:border-b-green-500 aria-[current='page']:text-green-500"
        >
          <Timer size={28} />
        </NavLink>

        <NavLink
          to="/history"
          title="Histórico"
          className="w-12 h-12 flex items-center justify-center border-b-[3px] border-t-[3px] border-transparent rounded-t hover:border-b-green-500 hover:bg-zinc-800 transition-colors duration-150 aria-[current='page']:border-b-green-500 aria-[current='page']:text-green-500"
        >
          <History size={28} />
        </NavLink>
      </nav>
    </header>
  )
}
