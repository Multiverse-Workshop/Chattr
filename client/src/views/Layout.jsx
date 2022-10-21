import React from 'react'
import MessageSideBar from '../components/MessageSidebar';
import SideNav from '../components/Sidenav';
function Layout({socket}) {

  return (
    <div className="main">
      <SideNav />
      <MessageSideBar socket={socket}/>
    </div>
  )
}

export default Layout