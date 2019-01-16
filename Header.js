import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom'

import './App.css';

class Header extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  changeFont() {
    let fonts = ["https://fontmeme.com/permalink/190105/34666c4990fb8a12c872269f5a64f200.png", // doodle
                 "https://fontmeme.com/permalink/190105/b861b9e0f248b04187673a06cafdcf51.png", // comics
                 "https://fontmeme.com/permalink/190105/d20c7c83635b87feaa88b3661e570380.png", // nouveau
                 "https://fontmeme.com/permalink/190105/eb4fe1a3f0fb6a10789edf6731d479d0.png", // typewriter
                 "https://fontmeme.com/permalink/190105/b0d4913c55ec53f29810bdd00be8f0b9.png", // magna carta
                 "https://fontmeme.com/permalink/190105/24b1f5ded5612f1c3ab1a446ba450ca5.png", // hearts
                 "https://fontmeme.com/permalink/190105/acf660a71f3f5e531a6fc33ec3b8d393.png", // blocky
                 "https://fontmeme.com/permalink/190105/90578442b3276021f5f32bbc0d61e3f5.png", // 8-bit
                 "https://fontmeme.com/permalink/190105/8baae864131bec9e65f235af4dc012b0.png", // calligraphy
                 "https://fontmeme.com/permalink/190105/a8590a3f8c7f634078e043f77f625695.png", // bauhaus
                 "https://fontmeme.com/permalink/190105/14e50937d1b6af4db8d0203170f2c9a4.png", // weebaneese
                 "https://fontmeme.com/permalink/190105/67560e9a9af0dd41928713e63e40f1dd.png", // ransom
                 "https://fontmeme.com/permalink/190105/997eb71762f01f9d1067f292609889d9.png", // broadway
                 "https://fontmeme.com/permalink/190105/c6c3829987542d73c3130b7397a78e4a.png", // metallica
                 "https://fontmeme.com/permalink/190105/a33cc24a746d69874a725179b6ac1d58.png", // minimal cursive
                 "https://fontmeme.com/permalink/190105/5fd50f6ade227ee71984cc390fca7d2d.png", // megaman
                ];
    let randomFont = Math.floor(Math.random() * fonts.length);
    let name = document.getElementById("name");

    name.setAttribute("src", fonts[randomFont]);
  }

  render() {
    
    return (
      
      <div>
        <ul className="header">
          <img id="name" src="https://fontmeme.com/permalink/190107/579de3df23688887f434564027f09280.png" border="0" onMouseOver={this.changeFont} ></img>
          <h4 style={{float: 'right'}} className="sub-heading"><Link to="/music" className="link">Music</Link></h4>
          <h4 style={{float: 'right'}} className="sub-heading"><Link to="/resume" className="link">Resume</Link></h4>
          <h4 style={{float: 'right'}} className="sub-heading"><Link to="/" className="link">Home</Link></h4>
        </ul>
      </div>
    ); 
  }
}

export default Header;
