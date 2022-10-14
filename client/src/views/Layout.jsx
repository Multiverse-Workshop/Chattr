import React from 'react'
import MessageSideBar from '../components/MessageSidebar';
import SideNav from '../components/Sidenav';
import { useSelector } from 'react-redux';

function Layout({socket}) {
  //const { socket } = useSelector((store) => store.socket)
  //console.log(socket)

  return (
    <div className="main">
      <SideNav />
      <MessageSideBar socket={socket}/>
    </div>
  )
}

export default Layout