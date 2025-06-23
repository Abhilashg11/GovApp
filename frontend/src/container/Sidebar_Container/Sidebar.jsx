import React from 'react'
import './sidebar.css'
import govlogo from '../../assets/govlogo.png'
import { Menu } from 'lucide-react';
const Sidebar = () => {
  const items = [
    {title:'Drinage',image:""},
    {title:'SWM vehicle',image:""},
    {title:'Street Lights',image:""},
    {title:'Drinking Water',image:""}
  ]
  return (
    <div className='wrapper'>
      <div className='top'>
        <div className='logo'><img src={govlogo}/></div>
        <div><Menu/></div>
      </div>
</div>
  )
}

export default Sidebar
