import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
        <section class="section projects-section">
            <h2 class="section-title"><i class="fa fa-archive"></i>Projects</h2>
            <div class="intro">
                <p>A list of my projects will eventually go here when I have the time</p>
            </div>
            <div class="item">
                <span class="project-title"><a href="https://github.com/derage/resume_website" target="_blank">Resume Website</a></span> -
                <span class="project-tagline">Code running this resume website (blog site coming) </span>
            </div>
        </section>
    );
  }
}

export default Projects;
