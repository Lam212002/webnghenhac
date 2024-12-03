import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import SidebarButton from './sidebarButton';
import {MdFavorite} from"react-icons/md";
import {FaGripfire,FaPlay} from"react-icons/fa";
import {FaSignOutAlt} from"react-icons/fa";
import {IoLibrary} from"react-icons/io5";
import { MdSpaceDashboard } from"react-icons/md";
import apiClient from '../../spotify';



export default function Sidebar() {
  const [image, setImage] = useState(
    "https://s199.imacdn.com/ta/2022/06/18/e45ccffcdc01bdf3_b4363a2f28a8dfa0_12231816555679559185710.jpg"
  );
  useEffect(()=>{
      apiClient.get("me").then((response) =>{
        // console.log(response);
      })
  },[])
  return (
    <div className="sidebar-container">
        <img src={image} className='profile-img' alt="profile"/>
    <div>
    <SidebarButton title="Feed"to="/feed" icon={<MdSpaceDashboard/>}/>
    <SidebarButton title="Trending"to="/trending" icon={<FaGripfire/>}/>
    <SidebarButton title="Player"to="/player" icon={<FaPlay/>}/>
    <SidebarButton title="Favorites"to="/favorites" icon={<MdFavorite/>}/>
    <SidebarButton title="Library"to="/" icon={<IoLibrary/>}/>
    </div>
    <SidebarButton title="Sign"to="" icon={<FaSignOutAlt/>} />
    </div>

  )
}
