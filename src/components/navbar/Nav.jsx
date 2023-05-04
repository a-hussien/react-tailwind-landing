import { useState } from 'react'
import NavLinks from './NavLinks'
import Logo from '../../assets/logo.png'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className="flex justify-between">
      <Link to="/">
        <img src={Logo} alt="logo" className="h-16 md:h-28 cursor-pointer" />
      </Link>
    <ul className="px-4 md:flex hidden items-center gap-10">
      <NavLinks />
    </ul>
    
    {/* Mobile Nav */}
    <ul
    className={`fixed top-0 z-50 bg-white w-2/3 h-screen shadow-2xl
    md:hidden flex flex-col gap-10 text-medium p-7 pt-20 duration-500
    ${open ? "right-0" : "right-[-100%]"}`}
    >
      <NavLinks />
    </ul>

    <div className="text-2xl md:hidden z-50 py-4" onClick={() => setOpen(!open)}>
    {!open ? <BiMenuAltRight /> : <AiOutlineClose />}
    </div>
  </nav>
  )
}

export default Nav