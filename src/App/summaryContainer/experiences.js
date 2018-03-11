import React, { Component } from 'react';

class Experiences extends Component {
  render() {
    return (
        <section class="section experiences-section">
            <h2 class="section-title"><i class="fa fa-briefcase"></i>Experiences</h2>
            <div id="experianceItems">
              <div class="item" >
                  <div class="meta">
                      <div class="upper-row">
                          <h3 class="job-title">Lead Developer</h3>
                          <div class="time">2015 - Present</div>
                      </div>
                      <div class="company">Startup Hubs, San Francisco</div>
                  </div>
                  <div class="details">
                      <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.</p>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                  </div>
              </div>

              <div class="item">
                  <div class="meta">
                      <div class="upper-row">
                          <h3 class="job-title">Senior Software Engineer</h3>
                          <div class="time">2014 - 2015</div>
                      </div>
                      <div class="company">Google, London</div>
                  </div>
                  <div class="details">
                      <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>

                  </div>
              </div>

              <div class="item">
                  <div class="meta">
                      <div class="upper-row">
                          <h3 class="job-title">UI Developer</h3>
                          <div class="time">2012 - 2014</div>
                      </div>
                      <div class="company">Amazon, London</div>
                  </div>
                  <div class="details">
                      <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                  </div>
              </div>
            </div>
        </section>

    );
  }
}

export default Experiences;
