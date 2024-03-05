import React from 'react'
import Left from '../components/LeftSide/Left'
import Navbar from '../components/Navigation/Navbar'
import Post from '../components/PostSide/Post'
import Right from '../components/RightSide/Right';
import './Home.css'

export default function Home() {
  return (
    <>
        <Navbar />
        <div className="bottom-container">
          <Left />
          <Post />
          <Right />
        </div>
      
    </>
  )
}
