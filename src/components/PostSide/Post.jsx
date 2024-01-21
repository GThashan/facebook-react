import React from 'react'
import Addpost from '../AddPost/Addpost';
import NewPost from '../Nowpost/NewPost';
import './Post.css';
function Post() {
  return (
    <div className="post-container">
      <Addpost />
      <NewPost imageUrl="https://img.freepik.com/free-vector/atom-science-education-icon-vector-neon-digital-graphic_53876-114080.jpg?size=626&ext=jpg&ga=GA1.1.1122607288.1705766416&semt=sph" />
      <NewPost imageUrl="https://img.freepik.com/free-photo/programming-background-collage_23-2149901789.jpg?size=626&ext=jpg&ga=GA1.1.1122607288.1705766416&semt=ais"/>
      <NewPost imageUrl="https://img.freepik.com/premium-vector/concept-programming-languages-from-around-world-man-programmer-showing-program-laptop_206127-480.jpg?size=626&ext=jpg&ga=GA1.1.1122607288.1705766416&semt=ais" />
    </div>
  )
}

export default Post
