import React, { Component } from 'react';

function Skill(props) {
  return (<div class="item">
      <h3 class="level-title">{props.name}</h3>
      <div class="level-bar">
          <div class="level-bar-inner" data-level={props.level}>
          </div>
      </div>
  </div>)
}


class Skills extends Component {
  render() {
    return (
        <section class="skills-section section">
            <h2 class="section-title"><i class="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
            <div class="skillset">
              <Skill name="Jenkins" level="98%" />
              <Skill name="Kubernetes" level="85%" />
              <Skill name="Docker" level="78%" />
              <Skill name="AWS" level="50%" />
              <Skill name="Nodejs" level="10%" />
            </div>
        </section>
    );
  }
}

export default Skills;
