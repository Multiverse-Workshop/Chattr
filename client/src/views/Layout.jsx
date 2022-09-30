import React from 'react'
import MessageSideBar from '../components/MessageSidebar';
import SideNav from '../components/Sidenav';

function Layout() {
  return (
    <div className="main">
      <SideNav />
      <MessageSideBar />
    </div>
  )
}

export default Layout