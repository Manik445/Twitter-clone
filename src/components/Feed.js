import React from 'react'
import TweetBox from './TweetBox'
import './TweetBox.css'
import './Feed.css'  

function Feed() {
  return (
    <div className='Feed--Section'>

     <div className='feed--header' >
     <h1>Home</h1>
     </div>

     <TweetBox />

    </div>
  )
}

export default Feed