import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import {Button, Breadcrumb} from 'react-bootstrap';
import Sidebar from './App/sidebar'
import SummaryContainer from './App/summaryContainer'

// const image = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png"

class App extends Component {
  render() {
    return (
      <div class="wrapper" id="mainBody">
          <Sidebar />
          <SummaryContainer />
      </div>
    );
  }
}

export default App;
