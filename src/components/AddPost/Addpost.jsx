import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import SellIcon from '@mui/icons-material/Sell';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import './AddPost.css';
function Addpost() {
  return (
    <div className="new-post">
        <div className="post-top">
        <img src="./img/1.jpg" className="post-img" />
        <div className="post-inputs">
            < SearchIcon />
        <input type="text" placeholder="What in your mind ?" className="post-input"></input>
        </div>
        </div>
        <hr className="pohr"></hr>
        <div className="post-bottom">
            <div className="bottom-icons">
                <div className="bottom-icon">
                   <BrokenImageIcon htmlColor='orange' />
                   <span>Add photoes/videos</span>
                </div>
                <div className="bottom-icon">
                   <PersonPinCircleIcon  htmlColor='red' />
                   <span>Add Location</span>
                </div>
                <div className="bottom-icon">
                   <SellIcon  htmlColor='blue' />
                   <span>Add Tags</span>
                </div>
                <div className="bottom-icon">
                   <LiveTvIcon  htmlColor='red'/>
                   <span>Go Live</span>
                </div>
            </div>
        </div>
     
    </div>
  )
}

export default Addpost
