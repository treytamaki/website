import React, { Component } from 'react';

import './App.css';
import facebookIcon from './icons/facebook.png';
import githubIcon from './icons/github.png';
import linkedinIcon from './icons/linkedin.png';
import wordpressIcon from './icons/wordpress.png';


class Footer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
        <div className="footer">
            <div className="icon-box">
                <h6 style={{float: 'left'}}>© 2019 Trey Tamaki. All rights reserved.</h6>
                <a href="https://www.facebook.com/treytamaki"><img src={facebookIcon} className="icon"></img></a>
                <a href="https://github.com/treytamaki"><img src={githubIcon} className="icon"></img></a>
                <a href="https://www.linkedin.com/in/treytamaki/"><img src={linkedinIcon} className="icon"></img></a>
                <a href="https://treytamaki.wordpress.com/"><img src={wordpressIcon} className="icon"></img></a>
            </div>
        </div>
    ); 
  }
}

export default Footer;
