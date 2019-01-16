import React, { Component } from 'react';

import './css-files/launchpad.css';


import Header from './Header';
import Footer from './Footer';

import soundIcon from './icons/sound-icon.png';

const INITIAL_VERSE_TIME = 4000;

class Launchpad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialTime: performance.now(),
            metronome: 1,
        }
    }

    componentDidMount() {
        this.setState({ initialTime: performance.now()});
        setInterval(() => this.trackTime(), 1000);
    }

    trackTime() {
        let beat = Math.floor((performance.now() - this.state.initialTime) / 1000) % 4;
        this.setState({ metronome: beat + 1 });
    }

    render() {
        let buttons = [];
        for (let i = 0; i < 25; i++) {
            buttons.push(<LaunchpadButton id={"button" + i}></LaunchpadButton>);
        }

        let samples = [];
        let sampleData = ["cymbal.mp3", "gamelan-drum.mp3", "glitch.mp3", "no-tears.mp3"];
        let sampleDataName = ["Cymbal", "Gamelan Drum", "Glitch", "No Tears"];
        for (let i = 0; i < sampleData.length; i++) {
            samples.push(<SoundClip src={"./sound-files/" + sampleData[i]} name={sampleDataName[i]}></SoundClip>);
        }


        return (
            <div>
                <Header></Header>
                <div className="cover-image-box" style={{ height: "131.32px" }}> </div>
                <br></br>
                <div className="body">
                    <div><h1>{this.state.metronome}</h1></div>
                    <div style={{ display:"flex"}}>
                        <div id="samples">
                            {samples}
                        </div>
                        <div id="grid">
                            {buttons}
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}
// /music/glitch.mp3
class LaunchpadButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            interval: null,
            src: "",
            time: INITIAL_VERSE_TIME,
        }

        this.changeColor = this.changeColor.bind(this);
        this.handleAudio = this.handleAudio.bind(this);
        this.playAudio = this.playAudio.bind(this);
        this.stopAudio = this.stopAudio.bind(this);
    }

    changeColor(box, audio) {
        let duration = audio.duration * 1000;
        box.setAttribute("style", "background-color: red;")
        setTimeout(function () {
            box.setAttribute("style", "background-color: white;");
        }, duration);

    }

    handleAudio(audio, box) {
        this.changeColor(box, audio);
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    }

    playAudio() {
        if (this.state.src) {
            let audio = document.getElementById(this.props.id + "audio");
            let box = document.getElementById(this.props.id);

            if (!this.state.playing) {
                this.setState({ playing: true });            
                audio.play();                       // FENCEPOST
                this.changeColor(box, audio);       // FENCEPOST
                this.setState({
                    interval: setInterval(() => this.handleAudio(audio, box), INITIAL_VERSE_TIME)
                });
            } else {
                let halftime = this.state.time / 2;
                this.setState({ time: halftime })
                clearInterval(this.state.interval);
                this.setState({
                    interval: setInterval(() => this.handleAudio(audio, box), halftime )
                });
            }
        } 
    }

    stopAudio() {
        document.getElementById(this.props.id + "audio").pause();
        document.getElementById(this.props.id + "audio").currentTime = 0;
        document.getElementById(this.props.id).setAttribute("style", "background-color: white;");
        this.setState({ playing: false });
    }

    allowDrop(ev) {
        ev.preventDefault();
    }

    drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        this.setState({ src: data })
    }

    render() {
        let audio = this.state.src;
        return (
            <div className="box" id={this.props.id} onClick={() => this.playAudio()} onDoubleClick={() => this.stopAudio()}
             onDragOver={(e) => this.allowDrop(e)} onDrop={(e) => this.drop(e)}>
                <audio id={this.props.id + "audio"} src={audio}></audio>
            </div>
        );
    }
}

class SoundClip extends Component {
    constructor(props) {
        super(props);
        this.drag = this.drag.bind(this);
    }

    drag(ev) {
        let src = this.props.src;
        ev.dataTransfer.setData("text", src);
    }

    render() {
        return(
            <div onClick={() => console.log()} className="sound-clip" draggable="true" onDragStart={(event) => this.drag(event)}>
                &nbsp;&nbsp;
                <img src={soundIcon} className="sound-icon"></img>
                <h4 style={{ padding: "1em" }}>{this.props.name}</h4>
            </div>
        );
    }
}

export default Launchpad;
