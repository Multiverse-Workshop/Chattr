import React from 'react'
import MessageSideBar from '../components/MessageSidebar';
import SideNav from '../components/Sidenav';

function Layout({loggedin}) {
  return (
    <div className="main">
      <SideNav />
      <MessageSideBar loggedin={loggedin}/>
    </div>
  )
}

export default Layout