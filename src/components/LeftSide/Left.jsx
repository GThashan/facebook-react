import React from 'react';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Groups2Icon from '@mui/icons-material/Groups2';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import ToysIcon from '@mui/icons-material/Toys';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import './Left.css';

function Left() {
  return (
    <div className="left-container">
      <div className="left-content">
        <div className="left-items">
          <li className='left-item'>
            < ChatBubbleIcon className="left-icon"/>
            <span>Messages</span>
          </li>
          <li className='left-item'>
            < Groups2Icon className="left-icon"/>
            <span>Groups</span>
          </li>
          <li className='left-item'>
            < DynamicFeedIcon className="left-icon"/>
            <span>Feedback</span>
          </li>
          <li className='left-item'>
            < AutoStoriesIcon className="left-icon"/>
            <span>Pages</span>
          </li>
          <li className='left-item'>
            < CalendarMonthIcon className="left-icon"/>
            <span>Events</span>
          </li>
          <li className='left-item'>
            < SettingsIcon className="left-icon"/>
            <span>Setting</span>
          </li>
          <li className='left-item'>
            < ToysIcon className="left-icon"/>
            <span>Games</span>
          </li>
          <li className='left-item'>
            < NewspaperIcon className="left-icon"/>
            <span>News</span>
          </li>
          <li className='left-item'>
            < WorkOutlineIcon className="left-icon"/>
            <span>Jobs</span>
          </li>
          <li className='left-item'>
            < LocalGroceryStoreIcon className="left-icon"/>
            <span>Market</span>
          </li>
         
        </div>
        <hr></hr>
        <h3>Pages You liked</h3>
        <div className="laft-pages">
          <li className="page">
          <img src="./img/1.jpg" className='profileImg' />
          <span>React</span>
          </li>
          <li className="page">
          <img src="./img/1.jpg" className='profileImg' />
          <span>React</span>
          </li>
          <li className="page">
          <img src="./img/1.jpg" className='profileImg' />
          <span>React</span>
          </li>
         
         
        </div>
      
     
      </div>
   
    </div>
  )
}

export default Left
