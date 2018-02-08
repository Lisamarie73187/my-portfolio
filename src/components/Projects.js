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
                        <p className="right_align_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ull</p>
                    </div>
                    {/* <div style={sample}><img src={goalsy} alt="goalsy"/></div> */}
               </div>
            </div>
        )
    }
}


export default Projects
