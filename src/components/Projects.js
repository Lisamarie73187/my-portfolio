import React, { Component } from 'react'

import goalsy from '../assets/goalsy.png'


class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

   


    render() {
        return (
            <div>
               <div className="projects">
                    <div>
                        <h3>Goalsy</h3>
                        <p style={Alignleft}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ull</p>
                    </div>
                    <div>
                        <img src={goalsy} alt="goalsy" width="400px"/>
                    </div>
               </div>
            </div>
        )
    }
}

const Alignleft = {
    textAlign: 'right'
}

export default Projects
