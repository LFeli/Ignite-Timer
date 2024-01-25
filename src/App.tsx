import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  return (
    <main className="bg-gray-900 text-gray-300 h-screen w-screen">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </main>
  )
}
