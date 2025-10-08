import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import NetflixLogo from '../assets/NetflixLogo.jpg'
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';function Header() {
  return (
    <div>
      <div>
        <div className='header-outer-container'>
          <div className='header-container'>
                <div className='header-left navbar'>
                    <div className='logo'>
                        <img src={NetflixLogo} width="100px" alt='netflix logo'/>
                    </div>
                    <ul className='header-list'>
                        <li>Netflix</li>
                        <li>Home</li>
                        <li>TV Show</li>
                        <li>Movie</li>
                        <li>Latest</li>
                        <li>MyList</li>
                        <li>Browse by Language</li>
                    </ul>
                </div>
                <div className='header-right'>
                    <ul className='header-list'>
                        <li><SearchIcon /></li>
                        <li><NotificationsIcon/></li>
                        <li><AccountBoxIcon/></li>
                        <li><ArrowDropDownIcon/></li>
                    </ul>
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
