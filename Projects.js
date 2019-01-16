import React, { Component } from 'react';

import './css-files/projects.css';

import Header from './Header';
import Footer from './Footer';

class Project extends Component {
  
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
                <ProjectBox name="React Website" date="December 2018" >
                    LOVE
                </ProjectBox>
                <ProjectBox name="Chess Bot" date="October 2018" link="">
                    
                </ProjectBox>
                <ProjectBox name="Starbucks CI/CD Dashboard" date="August 2018" link="">

                </ProjectBox>
                <ProjectBox name="Naive Bayes Classifier" date="October 2018" link="">

                </ProjectBox>
                <ProjectBox name="UnRest (DubHacks '17)" date="October 2017" link="">
                    <h2>HELLO</h2>
                </ProjectBox>
                <ProjectBox name="Huffman Encoder/Decoder" date="May 2017" link="https://courses.cs.washington.edu/courses/cse143/17au/handouts/21.html">
                    <h4>
                        Part of the CSE 143 curiculum, this project uses various data structures (e.g. Priority Queue and Binary Tree) to decode, encode, and make code to the schema of Huffman coding which is a way to compress text files based on frequency.
                        <br></br>
                        <a href="https://courses.cs.washington.edu/courses/cse143/17au/handouts/21.html">Spec Located Here</a>
                    </h4>
                </ProjectBox>
            </div>
            <Footer></Footer>
        </div>
    ); 
  }
}

class ProjectBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let name = this.props.name;
        let date = this.props.date;
        console.log(this.props)
        return( 
            <div>
                <h1>{name}</h1>
                <h3>{date}</h3>
                {this.props.children}
            </div>
        );
    }
}

export default Project;
