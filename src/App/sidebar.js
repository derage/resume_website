import React, { Component } from 'react';
import Profile from './sidebar/profile'
import ContactInfo from './sidebar/contactInfo.js'
import Interests from './sidebar/interests.js'
import Education from './sidebar/education.js'

class Sidebar extends Component {
  render() {
    return (
      <div class="sidebar-wrapper" id="sidebarDiv">
          <Profile />
          <ContactInfo />
          <Education />
          <Interests />
      </div>
    );
  }
}

export default Sidebar;
