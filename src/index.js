import React from 'react';
import ReactDOM from 'react-dom';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import MusicPage from './MusicPage.js';
import Resume from './Resume.js';
import Launchpad from './Launchpad.js';
import Projects from './Projects.js';


const routing = (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/music" component={MusicPage} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/launchpad" component={Launchpad} />
        <Route exact path="/projects" component={Projects} />
      </div>
    </Router>
  );


ReactDOM.render(routing, document.getElementById('root'));