import React, { Component } from 'react';
import CarrerProfile from './summaryContainer/carrerProfile'
import Experiences from './summaryContainer/experiences'
import Projects from './summaryContainer/projects'
import Skills from './summaryContainer/skills'

class SummaryContainer extends Component {
  render() {
    return (
        <div class="main-wrapper" id="summaryContainer">
            <CarrerProfile />
            <Experiences />
            <Projects />
            <Skills />
        </div>
    );
  }
}

export default SummaryContainer;
