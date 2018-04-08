import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <div class="education-container container-block">
        <h2 class="container-block-title">Education</h2>
        <div class="item">
          <h4 class="degree">BS in Computer Systems Engineer</h4>
          <h5 class="meta">University of Massachusetts Amherst</h5>
          <div class="time">2011 - 2014</div>
        </div>
        <div class="item">
          <h4 class="degree">BA in Computer Engineering</h4>
          <h5 class="meta">Holyoke Community College</h5>
          <div class="time">2007 - 2011</div>
        </div>
      </div>
    );
  }
}

export default Education;
