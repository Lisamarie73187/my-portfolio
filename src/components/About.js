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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                    proident, sunt in culpa qui officia deserunt mollit anim id est 
                    laborum</p>
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
