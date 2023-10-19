import {React , useState} from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
function Navbar() {
  const [togell , settogell] = useState(false)
  const toggeler = () => {
    settogell(!togell)
  }
  return (
    <div className='navbar'>
      <div className='logo'>
        WeatherApp
      </div>
      <div className='links'>
        <NavLink to="">Home</NavLink>
        <NavLink to="/today">TodayWeather</NavLink>
      </div>
      <div className='test'>
        <MenuRoundedIcon onClick={toggeler} />
        <div className={togell ? 'open' : 'close'}>
          <NavLink to="">Home</NavLink>
          <NavLink to="/today">TodayWeather</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
