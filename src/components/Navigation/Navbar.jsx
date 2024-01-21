import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import CommentIcon from '@mui/icons-material/Comment';
import SettingsIcon from '@mui/icons-material/Settings';
import '../Navigation/Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar-box">
      <div className="navbar-left">
          <span className="logo">Facebook</span>
      </div>
      <div className="navbar-center">
          <SearchIcon className="searchIcon" />
          <input type="text" placeholder="Search your friends here" className="input-feild"/>
          
      </div>
      <div className="navbar-right">
          <div className="navbar-links">
              <div className="navbar-link">
                  <span className="navlink">Home</span>
              </div>
              <div className="navbar-link">
              <span className="navlink">Profile</span>
              </div>
          </div>

          <div className="navbar-icons">
              <div className="navbar-icon">
                  <PersonIcon />
                  <span className="icon_count">3</span>
              </div>
              <div className="navbar-icon">
                  <CommentIcon />
                  <span className="icon_count">4</span>
              </div>
              <div className="navbar-icon">
                  <SettingsIcon />
                  <span className="icon_count">5</span>
              </div>
            
          </div>
          <div className="navbar-profile">
                  <img src="./img/1.jpg" className='profileImg' />
              </div>
      </div>
    </div>
  )
}
