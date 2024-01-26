import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  return (
    <main className="h-screen w-screen pt-[1px] bg-gray-900 text-gray-300">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </main>
  )
}
