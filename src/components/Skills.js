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
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div className="skills">
                    <h2>Skills</h2>
                        <div className="icons">
                            <img src={html} alt="html" height="90px"/>
                            <img src={css} alt="css" height="90px"/>
                            <img src={js} alt="js" height="80px"/>
                            <img src={react} alt="postgres" height="90px"/>
                            <img src={redux} alt="redux" height="80px"/>
                            <img src={git} alt="git" height="80px"/>
                            <img src={express} alt="express" height="80px"/>
                            <img src={node} alt="node" height="60px"/><br/>
                            <img src={postgres} alt="postgres" height="80px"/>
                            <img src={heroku} alt="heroku" height="80px"/>
                            <img src={sass} alt="sass" height="80px"/>
                            <img src={ai} alt="ai" height="75px"/>
                            <img src={ps} alt="ps" height="75px"/>
                        </div>
                </div>
            </div>
        )
    }
}


export default Skills
