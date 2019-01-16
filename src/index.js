import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import MusicPage from './MusicPage.js';
import Resume from './Resume.js';
import Launchpad from './Launchpad.js';
import Projects from './Projects.js';

console.log("ELO");

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/music" component={MusicPage} />
        <Route path="/resume" component={Resume} />
        <Route path="/launchpad" component={Launchpad} />
        <Route path="/projects" component={Projects} />
      </div>
    </Router>
  );


ReactDOM.render(routing, document.getElementById('root'));