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
                <p>I am Trevor. I'm a driven, enthusiastic professional with a passion for computers and their immense diversity. I always strive to further expand my knowledge and grow as an individual. I currently live in Phoenix, Arizona but after being raised in Illinois then attending the University of Iowa to study Computer Science I call many places home.</p>
            </div>
            <div className="flex">
                <div className="darkBox" style={border}>
                    <div>
                        <h2>Skills</h2>
                        <p>I'm a driven, enthusiastic professional with a passion for computers and their immense diversity.</p>
                    </div>
                </div>
                <div className="darkBox" style={border}>
                    <div>
                        <h2>Skills</h2>
                        <p>I'm a driven, enthusiastic professional with a passion for computers and their immense diversity.</p>
                    </div>
                </div>
                <div className="darkBox">
                    <div>
                        <h2>Skills</h2>
                        <p>I'm a driven, enthusiastic professional with a passion for computers and their immense diversity.</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

const border = {
    borderRight: '.5px solid white'
}


export default About
