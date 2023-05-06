import { Outlet } from 'react-router-dom'
import Nav from '../components/navbar/Nav'
import Footer from '../components/footer/Footer'

const DefaultLayout = () => {
  return (
    <div className='px-4 font-Poppins'>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default DefaultLayout