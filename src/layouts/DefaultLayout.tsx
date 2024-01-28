// import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 w-full h-LayoutContainerMobile md:h-LayoutContainerTablet lg:h-LayoutContainer max-w-6xl p-4 rounded-lg flex flex-col">
      <Header />
      {/* <Outlet /> */}
    </div>
  )
}
