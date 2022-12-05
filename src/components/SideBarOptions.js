import React from 'react'
import './SideOption.css' 

function SideBarOptions({ active , text , Icon}) {
  return (
    <div className={`SideBarOption ${active && "SideBar--active"}`}>
     <Icon /> 
     <h2>{text}</h2>  
    </div>
  )
} 

export default SideBarOptions   