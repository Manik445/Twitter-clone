import { Avatar, Button } from '@mui/material'
import React from 'react'


function TweetBox() {
  return (
    <div className='Tweetbox'>
     <form >
        <div className='tweetBox__input'>
        <Avatar  src=""/>
        <input placeholder='Type Something new' type="text"></input>
        </div> 
        <Button className="TweetBox__btn">Tweet</Button>
     </form>
    </div>       
  )
}

export default TweetBox 