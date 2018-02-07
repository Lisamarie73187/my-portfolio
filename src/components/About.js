import React, { Component } from 'react'

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
            <div className="gradient_Box">
                <h1>About</h1>
                <div className="about_line">i</div>
                <p>I am Trevor. I'm a driven, enthusiastic professional with a passion for computers and their immense diversity. I always strive to further expand my knowledge and grow as an individual.


                I currently live in Phoenix, Arizona but after being raised in Illinois then attending the University of Iowa to study Computer Science I call many places home.
                
                
                I have had a love for technology and the web ever since I was very young and it has grown as I have grown into who I am today. Knowing what field I wanted to be in was easy but getting there was the hard part. After a stint at the U of Iowa I eventually found myself attending DevMountain (a full-time web development bootcamp).
                
                
                Tech and computers are not my only passion though. I enjoy participating in and watching just about any sport, football being my favorite. Finding time to read is difficult but when I can I enjoy reading non-fiction. Taking time to hangout with friends and make new ones are very important as well.</p>
            </div>
            <div className="flex">
                <div className="darkBox" style={border}></div>
                <div className="darkBox" style={border}></div>
                <div className="darkBox"></div>
            </div>
        </div>
        )
    }
}

const border = {
    borderRight: '.5px solid white'
}


export default About
