import React from 'react'
import MessageSideBar from '../components/MessageSidebar';
import SideNav from '../components/Sidenav';

function Layout({loggedin, socket}) {
  return (
    <div className="main">
      <SideNav />
      <MessageSideBar socket={socket} loggedin={loggedin}/>
    </div>
  )
}

export default Layout