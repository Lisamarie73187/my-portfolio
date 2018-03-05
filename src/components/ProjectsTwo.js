import React, { Component } from 'react'

import scentric from '../assets/scentric.png'


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
                        <img src={scentric} alt="scentric" width="450px"/>
                    </div>
                    <div>
                        <div className="project_title">Scentric - <span>Full Stack group project ecommerce website selling perfumes and colognes.</span></div>
                        <div className="project_line">l</div>
                        <p className="project_tools">Tools: React, Redux, ES6, Sockets, Sass, Auth0, Node, Express, Massive, PostgreSQL, and Chart.js.</p>
                        <p>• Collaborated with team using Github, Trello, and Slack. <br/>
                        • Personally responsible for admin portal, admin analytics using chart.js, and design.<br/>
                        • Created wireframes, logo, and fictional products using Adobe Photoshop and Illustrator.</p>
                    </div>
               </div>
            </div>
        )
    }
}


export default Projects
