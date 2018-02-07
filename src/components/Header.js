import React, { Component } from 'react'

import FaGithubSquare from 'react-icons/lib/fa/github-square'
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square'
import FaBehanceSquare from 'react-icons/lib/fa/behance-square'
import FaEnvelopeSquare from 'react-icons/lib/fa/envelope-square'


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
            <div className="header">
                <div className="flex__left">
                    <div onClick={this.props.clickTop}>Home</div>
                    <div onClick={this.props.clickAbout}>About</div>
                    <div onClick={this.props.clickSkills}>Skills</div>
                    <div onClick={this.props.clickProjects}>Projects</div>
                    <div onClick={this.props.clickContact}>Contact</div>
                </div>
                <div className="float_right">
                    <div><FaGithubSquare/></div>
                    <div><FaLinkedinSquare/></div>
                    <div><FaBehanceSquare/></div>
                    <div><FaEnvelopeSquare/></div>
                </div>
            </div>
            </div>
        )
    }
}



export default Header
