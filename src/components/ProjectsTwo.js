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
                    <div style={sample}>image</div>
                    <div>
                        <h4>Goalsy</h4>
                        <p className="left_align_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ull</p>
                    </div>
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