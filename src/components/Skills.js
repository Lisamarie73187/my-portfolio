import React, { Component } from 'react'

import sass from '../assets/icons/sass.png'
import postgres from '../assets/icons/postgres.png'
import js from '../assets/icons/js.png'
import html from '../assets/icons/html.png'
import git from '../assets/icons/git.png'
import express from '../assets/icons/express.png'
import css from '../assets/icons/css.png'
import ai from '../assets/icons/ai.png'
import heroku from '../assets/icons/heroku.png'
import node from '../assets/icons/node.png'
import react from '../assets/icons/react.png'
import redux from '../assets/icons/redux.png'
import ps from '../assets/icons/ps.png'



class Skills extends Component {
   

    render() {
        return (
            <div>
                <div className="skills">
                    <h3>Skills</h3>
                        <div className="icons">
                            <div>
                                <img src={html} alt="html" height="70px"/>
                                <p>HTML5</p>
                            </div>
                            <div>
                                <img src={css} alt="css" height="70px"/>
                                <p>CSS3</p>
                            </div>
                            <div>
                                <img src={js} alt="js" height="60px"/>
                                <p>JavaScriptES6</p>
                            </div>
                            <div>
                            <img src={react} alt="react" height="70px"/>
                                <p>React</p>
                            </div>
                            <div>
                            <img src={redux} alt="redux" height="60px"/>
                                <p>Redux</p>
                            </div>
                            <div>
                            <img src={git} alt="git" height="60px"/>
                                <p>GIT</p>
                            </div>
                            <div>
                            <img src={express} alt="express" height="60px"/>
                                <p>Express</p>
                            </div>
                            <div>
                            <img src={node} alt="node" height="40px"/>
                                <p>Node</p>
                            </div>
                            <div>
                            <img src={postgres} alt="postgres" height="60px"/>
                                <p>PostgreSQL</p>
                            </div>
                            <div>
                            <img src={heroku} alt="heroku" height="60px"/>
                                <p>Heroku</p>
                            </div>
                            <div>
                            <img src={sass} alt="sass" height="60px"/>
                                <p>Sass</p>
                            </div>
                            <div>
                            <img src={ai} alt="ai" height="55px"/>
                                <p>Illustrator</p>
                            </div>
                            <div>
                            <img src={ps} alt="ps" height="55px"/>
                                <p>Photoshop</p>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}


export default Skills
