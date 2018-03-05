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
                        <img src={goalsy} alt="goalsy" width="350px"/>
                    </div>
                    <div>
                        <div className="project_title">Goalsy - <span>Full Stack web application to help you keep track of your goals and view your goal progress.</span></div>
                        <div className="project_line">l</div>
                        <p className="project_tools">Tools: React, Redux, Auth0, Node, Express, Massive, PostgreSQL, and Chart.js.</p>
                        <p>• User can register and login to keep track of their goals.<br/>
                        • User can create goals, add tasks for the goals, and add subtasks to the tasks.<br/>
                        • User can mark tasks complete and view goal progress.<br/>
                        • User can view their dashboard showing the overview of goals and analytics using chart.js.</p>
                    </div>
               </div>
            </div>
        )
    }
}


export default Projects
