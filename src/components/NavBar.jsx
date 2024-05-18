import { Link } from 'react-router-dom'
import searchIcon from '../img/searchIcon.png'
import logo from '../img/Logo.png'

const NavBar = () => {
  return (
    <div class=" bg-[#2a0135] text-white flex justify-around items-center py-8 border-b-[#eca92a] border-b-2">
      <div class="p-3 bg-[#eca92a]">
        <img src={searchIcon} width={'20px'}/>
      </div>
      <div class=" flex gap-6 items-end m-0 text-sm">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/room'>Rooms</Link>
        <img src={logo} width={'50px'}/>
        <Link to=''>Resto & Bar</Link>
        <Link to=''>News</Link>
        <Link to=''>Contact</Link>
      </div>
      <div class="p-3 bg-[#eca92a] text-sm">
        <p>Book Your Room Now</p>
      </div>
    </div>
  )
}

export default NavBar
