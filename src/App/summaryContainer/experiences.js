import React, { Component } from "react";

function Experiance(props) {
  return (
    <div class="item">
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
  );
}

class Experiences extends Component {
  render() {
    return (
      <section class="section experiences-section">
        <h2 class="section-title">
          <i class="fa fa-briefcase" />Experiences
        </h2>
        <div id="experianceItems">
          <Experiance
            title="Software Engineer in Devops"
            time="2017 - present"
            company="Skillsoft, Boston MA"
            detail="Worked in kubernetes to build tooling and build systems for development, qa and operations"
          />

          <Experiance
            title="Automated Verification / Build Process Engineer"
            time="2015 - 2017"
            company="Ingenico Mobile Solutions, Boston MA"
            detail="Strong focus on Continous Delivery and Deployment, reducing deployment and verifcation from 1 month to 6 hours. Streamlined DevOps to entire company through tooling and verifcation"
          />

          <Experiance
            title="Support Engineer"
            time="2012 - 2015"
            company="IBM Netezza, Marlboro MA"
            detail="Focus on troubleshooting and continous improvement. Built tool kit for daily process, automated health checking, and lower troubleshooting time"
          />
        </div>
      </section>
    );
  }
}

export default Experiences;
