import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <div class="education-container container-block">
          <h2 class="container-block-title">Education</h2>
          <div class="item">
              <h4 class="degree">MSc in Computer Science</h4>
              <h5 class="meta">University of London</h5>
              <div class="time">2011 - 2012</div>
          </div>
          <div class="item">
              <h4 class="degree">BSc in Applied Mathematics</h4>
              <h5 class="meta">Bristol University</h5>
              <div class="time">2007 - 2011</div>
          </div>
      </div>
    );
  }
}

export default Education;
