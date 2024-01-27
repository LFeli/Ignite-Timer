import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  return (
    <main className="h-screen w-full px-4 md:px-8 rounded-lg bg-gray-900 text-gray-300 flex items-center justify-center">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </main>
  )
}
