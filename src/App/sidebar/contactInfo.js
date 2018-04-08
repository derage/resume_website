import React, { Component } from "react";

class ContactInfo extends Component {
  render() {
    return (
      <div class="contact-container container-block">
        <ul class="list-unstyled contact-list">
          <li class="email">
            <i class="fa fa-envelope" />
            <a href="mailto: jesse.cafarelli@gmail.com">
              jesse.cafarelli@gmail.com
            </a>
          </li>
          <li class="website">
            <i class="fa fa-globe" />
            <a href="#" target="_blank">
              portfoliosite.com
            </a>
          </li>
          <li class="linkedin">
            <i class="fa fa-linkedin" />
            <a
              href="https://www.linkedin.com/in/jesse-cafarelli-6aa34b46/"
              target="_blank"
            >
              linkedin.com/in/jesse-cafarelli
            </a>
          </li>
          <li class="github">
            <i class="fa fa-github" />
            <a href="https://github.com/derage" target="_blank">
              github.com/derage
            </a>
          </li>
          <li class="twitter">
            <i class="fa fa-twitter" />
            <a href="https://twitter.com/JesseCafarelli" target="_blank">
              @JesseCafarelli
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default ContactInfo;
