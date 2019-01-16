import React, { Component } from 'react';

import './App.css';


import $ from "jquery";

// import MusicBox from "./MusicBox.js";

import Header from './Header';
import Footer from './Footer';

class MusicPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      musicBox: [],
      gridWidth: 9,
    }
  }
  
  componentDidMount() {
    this.changeGridSize(this.state.gridWidth);
  }

  changeGridSize(i) {
    document.getElementById("button" + Math.sqrt(this.state.gridWidth)).setAttribute("style", "background: white")
    this.setState({ gridWidth: i});
    document.getElementById("button" + Math.sqrt(i)).setAttribute("style", "background: grey")
    this.newSelection(i);
    this.calculateAlbumGrid(i);
  }

  calculateAlbumGrid(gridLength) {
    let columnPercentage = 100 / Math.sqrt(gridLength);
    let columnPercentageStatement = "";
    for (let i = 0; i < Math.floor(Math.sqrt(gridLength)); i++ ) {
      columnPercentageStatement += columnPercentage + "% ";
    }
    let box = document.getElementById("music-div");
    box.setAttribute("style","grid-template-columns:" + columnPercentageStatement);
  }

  newSelection(gridLength) {
    let musicBox = [];
    let images = ["pure-heroine.jpg", 
                  "square-two.png", 
                  "saturation-iii.jpg", 
                  "interstellar.jpg", 
                  "nvdes.jpg", 
                  "matangi.png",
                  "something-somewhere.jpg",
                  "skin.jpg",
                  "with-you.jpg",
                  "lp1.jpg",
                  "gossamer.jpg",
                  "in-the-aeroplane.jpg",
                  "cross.jpg",
                  "an-awesome-wave.jpg",
                  "electra-heart.jpg",
                  "worlds.jpg",
                  "in-return.jpeg",
                  "blood.jpg",
                  "area.jpg",
                  "oracular-spectacular.jpg",
                  "encore.jpg",
                  "strangers.png",
                  "westside.jpg",
                  "recess.jpg",
                  "motion.jpg",
                  "coloring-book.jpg",
                  "built-on-glass.jpg",
                  "fantasies.jpg",
                  "safari-disco-club.png",
                  "walk-the-moon.jpg",
                  "san-fermin.jpg",
                  "yeezus.jpg",
                  "miseducation-of-lauryn-hill.jpg",
                  "ß.jpg",
                  "awaken-my-love.jpg",
                  "sweetener.jpg",
                  "madeon.png",
                  "bankrupt.jpg",
                  "ultraviolence.jpg",
                  "love-yourself.jpg",
                  "gooey.jpg",
                  "currents.jpg",
                  "isolation.jpg",
                  "colors.jpg",
                  "iii.png",
                  "lungs.jpg",
                  "left-is-right.jpg",
                  "amsterdam-twerk.jpg",
                  "caracal.jpg",
                  "brighter-future.jpg",
                  "zanaka.jpg"
                ]
    let links = ["https://www.youtube.com/watch?v=ghICzY5V5vE",
                 "https://www.youtube.com/watch?v=x0-q6-PBpPU",
                 "https://www.youtube.com/watch?v=cTMucy4PR2k",
                 "https://www.youtube.com/watch?v=n0vMqkSRrmw",
                 "https://www.youtube.com/watch?v=nEqiOT_-Z_o",
                 "https://www.youtube.com/watch?v=eWXyB3e0fHU",
                 "https://www.youtube.com/watch?v=kC5gpp9RCPo",
                 "https://www.youtube.com/watch?v=_V7LoHuWFMI",
                 "https://www.youtube.com/watch?v=TpLNmjnf7Bk",
                 "https://www.youtube.com/watch?v=uY4s7tylR18",
                 "https://www.youtube.com/watch?v=uIjoaeXlQ_Y",
                 "https://www.youtube.com/watch?v=XLaFLztnL84",
                 "https://www.youtube.com/watch?v=tCnBrrnOefs",
                 "https://www.youtube.com/watch?v=joSUixErUGY",
                 "https://www.youtube.com/watch?v=voFGDHKnGUE",
                 "https://www.youtube.com/watch?v=D1sZ_vwqwcE",
                 "https://www.youtube.com/watch?v=fBMF1SOipck",
                 "https://www.youtube.com/watch?v=QCjAHj_qnCg",
                 "https://www.youtube.com/watch?v=CXoXRj1DR88",
                 "https://www.youtube.com/watch?v=r78xfXZb_WU",
                 "https://www.youtube.com/watch?v=mOKqNxN4jWM",
                 "https://www.youtube.com/watch?v=__yVuReTu3Q",
                 "https://www.youtube.com/watch?v=JFttQbkTKi0",
                 "https://www.youtube.com/watch?v=m7ot7fnFyuk",
                 "https://www.youtube.com/watch?v=2s-mCenupxs",
                 "https://www.youtube.com/watch?v=c3WjFk47NqI",
                 "https://www.youtube.com/watch?v=nsRetQ2jUS8",
                 "https://www.youtube.com/watch?v=USfoTGFGARE",
                 "https://www.youtube.com/watch?v=rEoJpo7BgoU",
                 "https://www.youtube.com/watch?v=EEoIeCa05jM",
                 "https://www.youtube.com/watch?v=qnILLpzuPKM",
                 "https://www.youtube.com/watch?v=nn0Pu2Qun-E",
                 "https://www.youtube.com/watch?v=T6QKqFPRZSA",
                 "https://www.youtube.com/watch?v=gxApr8QnlGY",
                 "https://www.youtube.com/watch?v=Kp7eSUU9oy8",
                 "https://www.youtube.com/watch?v=vZi3AHnb8b4",
                 "https://www.youtube.com/watch?v=_P9FgOo_2xQ",
                 "https://www.youtube.com/watch?v=KdG1HRc8eW0",
                 "https://www.youtube.com/watch?v=DQX6V4pXCkw",
                 "https://www.youtube.com/watch?v=IfemyZEhfpY",
                 "https://www.youtube.com/watch?v=jeo3an2M_Lo",
                 "https://www.youtube.com/watch?v=O2lzmpEs29M",
                 "https://www.youtube.com/watch?v=oskq36AaIS4",
                 "https://www.youtube.com/watch?v=6ZlbahhoEIo",
                 "https://www.youtube.com/watch?v=Vlfcqw_zEhU",
                 "https://www.youtube.com/watch?v=timg_3Yd38E",
                 "https://www.youtube.com/watch?v=VUqELNBrevk",
                 "https://www.youtube.com/watch?v=uEKCD-zo8Fo",
                 "https://www.youtube.com/watch?v=b_KfnGBtVeA",
                 "https://www.youtube.com/watch?v=mLo9kIlAqRE",
                 "https://www.youtube.com/watch?v=-1DbYJH2h98"
                ];
    let titles = ["Ribs",
                  "Whisper",
                  "Bleach",
                  "Breaking News (feat. RAYE)",
                  "Turning Heads",
                  "Double Bouble Trouble",
                  "Firefly",
                  "Innocence (feat. AlunaGeorge)",
                  "With You",
                  "Two Weeks",
                  "I'll Be Alright",
                  "Holland, 1945",
                  "D.A.N.C.E.",
                  "Fitzpleasure",
                  "Primadonna",
                  "Flicker",
                  "Bloom",
                  "Unstoppable (FKJ Remix)",
                  "Area",
                  "Electric Feel",
                  "Middle (feat. Bipolar Sunshine)",
                  "Cheap Sunglasses (feat. Matthew Koma)",
                  "Que Que (feat. Maluca)",
                  "Dirty Vibe (feat. G-Dragon & CL)",
                  "Motion (feat. Ellie Golding)",
                  "Angels",
                  "Gold",
                  "Black Sheep",
                  "Que Veux-Tu",
                  "Tightrope",
                  "Sonsick",
                  "Blood on the Leaves",
                  "Doo-Wop (That Thing)",
                  "One Touch (feat. AlunaGeorge & Rae Sremmurd)",
                  "Redbone",
                  "no tears left to cry",
                  "Pop Culture",
                  "S.O.S. in Bel Air",
                  "Money Power Glory",
                  "DNA",
                  "Gooey",
                  "The Less I Know The Better",
                  "After the Storm (feat. Tyler the Creator & Bootsy Collins)",
                  "Wow",
                  "Genghis Khan",
                  "Cosmic Love",
                  "Mantra",
                  "DJ Turn It Up",
                  "Magnets (feat. Lorde)",
                  "All of Me (feat. Logic & Rozes)",
                  "Makeba"
                ];
    let artists = ["Lorde",
                  "BLACKPINK",
                  "Brockhampton",
                  "Louis the Child",
                  "NVDES",
                  "M.I.A.",
                  "Mura Masa",
                  "Flume",
                  "Tennyson",
                  "FKA Twigz",
                  "Passion Pit",
                  "Neutral Milk Hotel",
                  "Justice",
                  "Alt-J",
                  "Marina and the Diamonds",
                  "Porter Robinson",
                  "ODESZA",
                  "Lianne La Havas",
                  "MagnusTheMagnus",
                  "MGMT",
                  "DJ Snake",
                  "RAC",
                  "Dillon Francis",
                  "Skrillex",
                  "Calvin Harris",
                  "Chance the Rapper",
                  "Chet Faker",
                  "Metric",
                  "Yelle",
                  "Walk The Moon",
                  "San Fermin",
                  "Kanye West",
                  "Lauryn Hill",
                  "Baauer",
                  "Childish Gambino",
                  "Ariana Grande",
                  "Madeon",
                  "Phoenix",
                  "Lana Del Rey",
                  "BTS",
                  "Glass Animals",
                  "Tame Impala",
                  "Kali Uchis",
                  "Beck",
                  "Miike Snow",
                  "Florence + the Machine",
                  "TroyBoi",
                  "Yellow Claw",
                  "Disclosure",
                  "Big Gigantic",
                  "Jain"
                ];        
    let albums = ["Pure Heroine",
                  "Square Two",
                  "Saturation III",
                  "Interstellar",
                  "LA NVDITÉ, Vol. 1",
                  "Matangi",
                  "Something Somewhere",
                  "Skin",
                  "With You",
                  "LP1",
                  "Gossamer",
                  "In the Aeroplane Over The Sea",
                  "Cross",
                  "An Awesome Wave",
                  "Electra Heart",
                  "Worlds",
                  "In Return",
                  "Blood",
                  "Area",
                  "Oracular Spectacular",
                  "Encore",
                  "STRANGERS",
                  "Westside",
                  "Recess",
                  "Motion",
                  "Coloring Book",
                  "Built on Glass",
                  "Fantasies",
                  "Safari Disco Club",
                  "Walk The Moon",
                  "San Fermin",
                  "Yeezus",
                  "The Miseducation of Lauryn Hill",
                  "ß",
                  "Awaken, My Love!",
                  "Sweetener",
                  "Madeon - EP",
                  "Bankrupt!",
                  "Ultraviolence",
                  "LOVE YOURSELF 結 'Answer'",
                  "Gooey - EP",
                  "Currents",
                  "Isolation",
                  "Colors",
                  "iii",
                  "Lungs",
                  "Left is Right",
                  "Amsterdam Twerk Music",
                  "Caracal",
                  "Brighter Future",
                  "Zanaka"
                ];    
    let items = gridLength;
    let randomIndices = [];
    for (let i = 0; i < items; i++) {
      let randomIndex = Math.floor(Math.random() * albums.length);
      while (randomIndices.indexOf(randomIndex) !== -1) {
        randomIndex = Math.floor(Math.random() * albums.length);
      }
      randomIndices.push(randomIndex);
    }
    for (let i = 0; i < items; i++) {
      let index = randomIndices[i];
      musicBox.push(<MusicBox albumImage={"./music/" + images[index]} youtubeLink={links[index]} title={titles[index]} artist={artists[index]} album={albums[index]} index={index}></MusicBox>);
    } 
    let changedAlbums = document.getElementsByClassName("album-art");
    for (let i = 0; i < changedAlbums.length; i++) {
      changedAlbums[i].setAttribute('style', 'transition: ; border-radius:');
    }
    this.setState({musicBox: musicBox});
  }


  render() {
    
    return (
    
        <div>
            <Header></Header>
            <div className="cover-image-box" style={{ height:"131.32px" }}> </div>
                <br></br>
                <div className="body">
                <div style={{ textAlign:"center" }}>
                  <button onClick={() => this.changeGridSize(1)} id={"button" + 1}>1</button>
                  <button onClick={() => this.changeGridSize(4)} id={"button" + 2}>2</button>
                  <button onClick={() => this.changeGridSize(9)} id={"button" + 3}>3</button>
                  <button onClick={() => this.changeGridSize(16)} id={"button" + 4}>4</button>
                  <button onClick={() => this.changeGridSize(25)} id={"button" + 5}>5</button>
                </div>
                <div id="music-div">
                    {this.state.musicBox}
                </div>
            </div>
            <Footer></Footer>
        </div>
    ); 
  }
}

class MusicBox extends Component {    
  constructor(props) {
    super(props);
    this.state = {
        playing: false
    }
    this.showSymbol = this.showSymbol.bind(this);
    this.control = this.control.bind(this);
  }

  showSymbol(i) {
      document.getElementById("symbol-shape" + i).style.display = "";
      document.getElementById("info-box" + i).style.display = "";
  }

  hideSymbol(i) {
      document.getElementById("symbol-shape" + i).style.display = "none";
      document.getElementById("info-box" + i).style.display = "none";
  }

  control(i) {
      let symbol = document.getElementById("symbol" + i);
      if (!this.state.playing) {
          this.setState({ playing: true });
          this.start();
          symbol.innerText = "❚❚";
      } else {
          this.setState({ playing: false });
          this.stop();
          symbol.innerText = "►";
      }
  }

  start() {
      let index = this.props.index;
      $("#video" + index)[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
      document.getElementById("album-art" + index).setAttribute('style', 'transition: border-radius .3s ease-in-out, transform 300s; border-radius:50%; transform: rotate(7200deg);'); 
  }

  stop() {
      let index = this.props.index;
      $("#video" + index)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
      document.getElementById("album-art" + index).setAttribute('style', 'transition: ; border-radius:');
  }

  pause() {
      let index = this.props.index;
      $("#video" + index)[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
      document.getElementById("album-art" + index).setAttribute('style', 'transition: transform 0s: ; border-radius: 50%');
  }

  render() {
      let index = this.props.index;
      let embedLink = this.props.youtubeLink.substring(0, 23) + "/embed/" + this.props.youtubeLink.substring(32) + "?enablejsapi=1&version=3&playerapiid=ytplayer";
      let videoId = "video" + index;
      return(
          <div id={"album-box" + index} className="album-box">
              <div id={"art-box" + index} className="art-box">
                  <img id={"album-art" + index} className="album-art" src={this.props.albumImage} onMouseOver={() => this.showSymbol(index)} onMouseOut={() => this.hideSymbol(index)} onClick={() => this.control(index)}>
                  </img>
                  <div id={"info-box" + index} className="info-box">
                      <h3 className="song-info">{this.props.title}</h3>
                      <h4 className="song-info">{this.props.artist}</h4>
                      <p className="song-info">{this.props.album}</p>
                  </div>
                  <div className="symbol-shape" id={"symbol-shape" + index}>
                      <p id={"symbol" + index} className="symbol">►</p>
                  </div>
              </div>
              <div style={{position:"relative", width:"0px", height:"0px", overflow:"hidden"}}>
                  <iframe width="300" height="300" src={embedLink} id={videoId}></iframe>
              </div> 
          </div>
      );
  }
}


export default MusicPage;
