import React, { Component } from 'react'

import goalsy from '../assets/goalsy.jpg'
import goalsy2 from '../assets/goalsy2.png'
import goalsylandingPage from '../assets/goalsylandingPage.jpg'
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
                    <h3>Projects</h3>
                        <div className="about_line">i</div>
                            <div className="projectsParagraph">
                                <div className="project_title">Goalsy - <span>Full Stack web application to help you keep track of your goals and view your goal progress.</span></div>
                                <p className="project_tools">Tools: React, Redux, Auth0, Node, Express, Massive, PostgreSQL, and Chart.js.</p>
                                <p>• User can register and login to keep track of their goals.<br/>
                                • User can create goals, add tasks for the goals, and add subtasks to the tasks.<br/>
                                • User can mark tasks complete and view goal progress.<br/>
                                • User can view their dashboard showing the overview of goals and analytics using chart.js.</p>
                            </div>
                        <div className="projectPictures">
                            <img src={goalsylandingPage} alt="goalsyLandingPage" width="280px"/>
                            <img src={goalsy} alt="goalsy" width="280px"/>
                            <img src={goalsy2} alt="goalsy2" width="280px"/>
                        </div>
                    <div>
                        <div className="projectsParagraph">
                            <div className="project_title">Scentric - <span>Full Stack group project ecommerce website selling perfumes and colognes.</span></div>
                            <p className="project_tools">Tools: React, Redux, ES6, Sockets, Sass, Auth0, Node, Express, Massive, PostgreSQL, and Chart.js.</p>
                            <p>• Collaborated with team using Github, Trello, and Slack. <br/>
                            • Personally responsible for admin portal, admin analytics using chart.js, and design.<br/>
                            • Created wireframes, logo, and fictional products using Adobe Photoshop and Illustrator.</p>
                        </div>
                    </div>
                    <div className="projectPictures">
                        <img src={scentric} alt="scentric" width="250px"/>
                    </div>
               </div>
                <div>
                </div>
            </div>
        )
    }
}



export default Projects
