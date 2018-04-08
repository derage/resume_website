import React, { Component } from 'react';

function Experiance(props) {
  return (
    <div class="item" >
        <div class="meta">
            <div class="upper-row">
                <h3 class="job-title">{props.title}</h3>
                <div class="time">{props.time}</div>
            </div>
            <div class="company">{props.company}</div>
        </div>
        <div class="details">
            <p>{props.detail}</p>
        </div>
    </div>
  )
}


class Experiences extends Component {
  render() {
    return (
        <section class="section experiences-section">
            <h2 class="section-title"><i class="fa fa-briefcase"></i>Experiences</h2>
            <div id="experianceItems">
              <Experiance title="Software Engineer in Devops" time="2017 - present" company="Skillsoft, Boston MA"
              detail ="Worked in kubernetes to build tooling and build systems for development, qa and operations"/>
              
              <Experiance title="Software Engineer in Devops" time="2017 - present" company="Skillsoft, Boston MA"
              detail ="Worked in kubernetes to build tooling and build systems for development, qa and operations"/>
              
              <Experiance title="Software Engineer in Devops" time="2017 - present" company="Skillsoft, Boston MA"
              detail ="Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."/>

            </div>
        </section>

    );
  }
}

export default Experiences;
