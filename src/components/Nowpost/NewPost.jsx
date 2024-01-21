import React from 'react';
import './NewPos.css';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function NewPost({ imageUrl }) {
  return (
     
    <div className="new-container">
    

        <div className="new-top">
            <div className="new-profile">
                <img src='./img/1.jpg' className="new-img"></img>
                <span className="profile-name">Jone dey</span>
                <span className="prifile-time">5 minitue ago</span>
            </div>
            <div className="post-caption">🌟 Here's to the React.js community, where developers support and inspire each other! 🤝 Let's keep pushing the boundaries of web development and creating exceptional user interfaces. #ReactJS #CodingJourney #WebDevelopmentAdventures 🚀💻</div>
            
        </div>
        <div className="new-body">
        <img src={imageUrl} alt="Post Image" />
            {/* <img src="https://img.freepik.com/free-vector/atom-science-education-icon-vector-neon-digital-graphic_53876-114080.jpg?size=626&ext=jpg&ga=GA1.1.1122607288.1705766416&semt=sph" /> */}
        </div>
        <div className="new-bottom">
            <div className="bottm-img">
            
             <ThumbUpIcon htmlColor="blue"/>
             <span>Hero and 225 others</span>
            </div>
            <span>15 commnets</span>
        </div>
    
    </div>
 
  )
}

export default NewPost
