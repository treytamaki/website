import React, { Component } from 'react';

import './App.css';


import Header from './Header';
import Footer from './Footer';

import Resume from './Trey Tamaki Resume (December 2018).pdf';

class MusicPage extends Component {
  
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
            <div id="body">
                HELLO
            </div>
            <Footer></Footer>
        </div>
    ); 
  }
}

export default MusicPage;
