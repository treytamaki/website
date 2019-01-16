import React, { Component } from 'react';

import './App.css';
import facebookIcon from './icons/facebook.png';
import githubIcon from './icons/github.png';
import linkedinIcon from './icons/linkedin.png';
import wordpressIcon from './icons/wordpress.png';

import Header from './Header.js';
import Footer from './Footer.js';

const TYPE_SPEED = 200;

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      musicBox: [],
      phrase: "Welcome"
    }
  }
  
  componentDidMount() {
    this.typeAnimation(0);
  }

  typeAnimation(i) {
    let phrases = ["Welcome", "Hi", "Howdy", "Aloha", "Hola", "Hello", "Salut", "Szia", "Merhaba", "こんにちは", "Hallo", "Bonjour", "שלום", "Ciao", "안녕하세요", "你好", "สวัสดี", "Привет", "Καλημέρα", "नमस्ते", "مرحبا", "გამარჯობა", "བཀྲ་ཤིས་བདེ་ལེགས", "မင်္ဂလာပါ။", "নমস্কার"];
    let p = document.getElementById("type-animation");
    if (p) {
      let txt = this.state.phrase;
      if (i < txt.length) {
        p.innerText += "" + txt.charAt(i);
        i++;
        setTimeout(() => this.typeAnimation(i)
        , TYPE_SPEED);
      } else if (i <= txt.length * 2) {
        let subtractIndex = i - txt.length;
        p.innerText = txt.substring(0, txt.length - subtractIndex);
        i++;
        setTimeout(() => this.typeAnimation(i)
        , TYPE_SPEED);
      } else {
        let randomPhrase = Math.floor(Math.random() * phrases.length);
        this.setState({phrase: phrases[randomPhrase]});
        this.typeAnimation(0); 
      }
    }
  }

  render() {
    return (
      <div>
        <Header></Header>
        <div className="cover-image-box">
           <div id="type-block">
              <h1 id="type-animation"></h1>
           </div>
        </div>
        <br></br>

        <div className="body">
          <h3>Hello!</h3>
          <p>My name is Trey Tamaki! I am a fourth-year student at the University of Washington, Seattle Campus.</p>
          <p>I am getting my B.S. in Computer Science with a minor in Art History with an intended graduation in Spring 2020.</p>
        </div>
        
        <Footer></Footer>
      </div>
    ); 
  }
}

export default App;
