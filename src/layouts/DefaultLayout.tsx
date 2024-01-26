import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div className="max-w-[74rem] h-LayoutContainer mx-auto my-20 p-10 rounded-lg flex flex-col bg-gray-800">
      <Header />
      <Outlet />
    </div>
  )
}
