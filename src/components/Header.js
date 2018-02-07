import React, { Component } from 'react'

import FaGithubSquare from 'react-icons/lib/fa/github-square'


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="header">
                <div className="flex__left">
                    <div onClick={this.props.clickTop}>Home</div>
                    <div onClick={this.props.clickAbout}>About</div>
                    <div onClick={this.props.clickSkills}>Skills</div>
                    <div onClick={this.props.clickProjects}>Projects</div>
                    <div onClick={this.props.clickContact}>Contact</div>
                </div>
                <div className="flex_right">
                    <FaGithubSquare/>
                </div>
            </div>
        )
    }
}



export default Header
