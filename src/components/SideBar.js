import React from 'react'
import SideBarOptions from './SideBarOptions';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MessageIcon from '@mui/icons-material/Message';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Person2Icon from '@mui/icons-material/Person2';


function SideBar() {
  return (
     <div className="sideBar">
     < TwitterIcon /> 
      <SideBarOptions active Icon={HomeIcon} text="Home" />  
      <SideBarOptions  Icon={SearchIcon} text="Explore"/>
      <SideBarOptions Icon={NotificationsIcon} text="Notifications"/>
      <SideBarOptions Icon={ShareIcon}  text="share"/> 
      <SideBarOptions  Icon={BookmarkBorderIcon} text="Bookmark"/>
      <SideBarOptions  Icon={MessageIcon} text="Messages"/>
      <SideBarOptions Icon={Person2Icon} text="Profile" /> 
      <SideBarOptions Icon={MoreHorizIcon} text="More" />


      </div>   
  )           
}

export default SideBar   