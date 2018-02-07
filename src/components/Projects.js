import React, { Component } from 'react'


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
                        <h2>Goalsy</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ull</p>
                   </div>
                   <div style={sample}>image</div>
               </div>
            </div>
        )
    }
}

const sample = {
    width: '500px',
    backgroundColor: 'white'
}
export default Projects
