import React, { Component } from 'react';

import './App.css';


import Header from './Header';
import Footer from './Footer';

import ResumeDoc from './Trey Tamaki Resume (December 2018).pdf';

class Resume extends Component {
  
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  componentDidMount() {
  }

  render() {
    
    return (
    
        <div>
            <Header></Header>
            <div className="cover-image-box" style={{ height:"131.32px" }}> </div>
            <br></br>
            <div id="resume">
                <embed src={ResumeDoc} style={{ width: "80%", height: "100%", margin:"3em", marginLeft:"auto", marginRight:"auto", display:"block"}}></embed>
            </div>
            <Footer></Footer>
        </div>
    ); 
  }
}

export default Resume;
