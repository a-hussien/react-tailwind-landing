import { Outlet } from 'react-router-dom'
import Nav from '../components/navbar/Nav'
import Footer from '../components/Footer'

const DefaultLayout = () => {
  return (
    <div className='h-screen bg-slate-100'>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default DefaultLayout