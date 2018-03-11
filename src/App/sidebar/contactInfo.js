import React, { Component } from 'react';

class ContactInfo extends Component {
  render() {
    return (
      <div class="contact-container container-block" >
          <ul class="list-unstyled contact-list">
              <li class="email"><i class="fa fa-envelope"></i><a href="mailto: jesse.cafarelli@gmail.com">jesse.cafarelli@gmail.com</a></li>
              <li class="website"><i class="fa fa-globe"></i><a href="http://themes.3rdwavemedia.com/website-templates/free-responsive-website-template-for-developers/" target="_blank">portfoliosite.com</a></li>
              <li class="linkedin"><i class="fa fa-linkedin"></i><a href="#" target="_blank">linkedin.com/in/jecafarelli</a></li>
              <li class="github"><i class="fa fa-github"></i><a href="#" target="_blank">github.com/derage</a></li>
              <li class="twitter"><i class="fa fa-twitter"></i><a href="https://twitter.com/3rdwave_themes" target="_blank">@twittername</a></li>
          </ul>
      </div>
    );
  }
}

export default ContactInfo;
