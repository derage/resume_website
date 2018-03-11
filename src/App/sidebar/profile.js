import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
          <div class="profile-container">
              <img id="profileImg" class="profile" src="assets/images/TUX_G2.svg" alt="" />
              <h1 class="name">Jesse Cafarelli</h1>
              <h3 class="tagline">Software Engineer in Devops</h3>
          </div>
    );
  }
}

export default Profile;
