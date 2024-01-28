import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ThemeProvider } from './components/theme-provider'

export function App() {
  return (
    <ThemeProvider>
      <main className="h-screen w-full px-4 md:px-8 rounded-lg bg-green-100 text-gray-900  dark:bg-gray-900 dark:text-gray-300 flex items-center justify-center">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </main>
    </ThemeProvider>
  )
}
